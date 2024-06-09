// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if (request.action === 'fetchGoods') {
//       fetch('http://13.75.124.149:5001/goods')
//         .then(response => {
//           if (!response.ok) {
//             throw new Error('Network response was not ok');
//           }
//           return response.json();
//         })
//         .then(data => sendResponse({ data }))
//         .catch(error => sendResponse({ error: error.message }));
  
//       return true; // 비동기 응답을 위해 true를 반환합니다.
//     }
//   });
  

// chrome.runtime.onInstalled.addListener(() => {
//     console.log('Extension installed');
//   });
  
//   chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if (request.action === 'fetchGoods') {
//       fetch('http://localhost:5001/goods')
//         .then(response => {
//           if (!response.ok) {
//             throw new Error('Network response was not ok');
//           }
//           return response.json();
//         })
//         .then(data => sendResponse({ data }))
//         .catch(error => sendResponse({ error: error.message }));
  
//       return true; // 비동기 응답을 위해 true를 반환합니다.
//     }
//   });
  


// const fetchGoodsFromServer = async () => {
//   try {
//     const response = await fetch('http://127.0.0.1:5001/goods'); 
//     return data;
//   } catch (error) {
//     throw new Error('Error fetching goods: ' + error.message);
//   }
// };

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.action === 'fetchGoods') {
//     fetchGoodsFromServer()
//       .then(data => sendResponse({ data: data }))
//       .catch(error => sendResponse({ error: error.message }));
//     return true; 
//   }
// });



// 백업
// const fetchGoodsFromServer = async () => {
//   try {
//     const response = await fetch('http://127.0.0.1:5001/goods');
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     throw new Error('Error fetching goods: ' + error.message);
//   }
// };

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.action === 'fetchGoods') {
//     fetchGoodsFromServer()
//       .then(data => sendResponse({ data: data }))
//       .catch(error => sendResponse({ error: error.message }));
//     return true; 
//   }
// });

// chrome.runtime.onInstalled.addListener(() => {
//   chrome.contextMenus.create({
//     id: "sendImageLink",
//     title: "[SILK ROAD] 촉감 알아보기",
//     contexts: ["image"]
//   });
// });

// chrome.contextMenus.onClicked.addListener((info, tab) => {
//   if (info.menuItemId === "sendImageLink") {
//     const imageUrl = info.srcUrl;
//     const pageUrl = info.pageUrl;

//     // 서버로 데이터 전송
//     fetch("http://127.0.0.1:5001/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         imageUrl: imageUrl,
//         pageUrl: pageUrl
//       })
//     }).then(response => {
//       if (response.ok) {
//         console.log("Image link sent successfully");
//       } else {
//         console.error("Failed to send image link");
//       }
//     }).catch(error => {
//       console.error("Error sending image link:", error);
//     });
//   }
// });


// 서버로 데이터를 전송하는 함수
const sendImageDataToServer = async (imageUrl, pageUrl) => {
  try {
    const response = await fetch("http://127.0.0.1:5001/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ imageUrl, pageUrl })
    });

    if (response.ok) {
      console.log("Image link sent successfully");
    } else {
      console.error("Failed to send image link");
    }
  } catch (error) {
    console.error("Error sending image link:", error);
  }
};

// 이미지 링크에서 상품 ID를 추출하는 함수
const extractProductId = (imageUrl) => {
  const regex = /\/(\d+)_\d+/;
  const match = imageUrl.match(regex);
  return match ? match[1] : null;
};

// 컨텍스트 메뉴 항목 생성
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "sendImageLink",
    title: "Send Image Link to Server",
    contexts: ["image"]
  });
});

// 컨텍스트 메뉴 항목 클릭 이벤트 처리
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "sendImageLink") {
    const imageUrl = info.srcUrl;
    const productId = extractProductId(imageUrl);

    if (productId) {
      const pageUrl = `https://www.musinsa.com/app/goods/${productId}`;
      console.log(`Image URL: ${imageUrl}`);
      console.log(`Page URL: ${pageUrl}`);
      sendImageDataToServer(imageUrl, pageUrl);
    } else {
      console.error("Could not extract product ID from image URL");
    }
  }
});
