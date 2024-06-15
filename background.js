// const sendImageDataToServer = async (imageUrl, pageUrl, productId) => {
//   try {
//     const response = await fetch("http://127.0.0.1:5001/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({ imageUrl, pageUrl, productId })
//     });

//     if (response.ok) {
//       const data = await response.json();
//       console.log("이미지 링크 전송 성공");

//       chrome.storage.local.set({ searchResults: data });
//     } else {
//       console.error("이미지 링크 전송 실패");
//     }
//   } catch (error) {
//     console.error("이미지 링크 전송 오류:", error);
//   }
// };

// const extractProductId = (imageUrl) => {
//   const regex = /\/(\d+)_\d+/;
//   const match = imageUrl.match(regex);
//   return match ? match[1] : null;
// };

// chrome.runtime.onInstalled.addListener(() => {
//   chrome.contextMenus.create({
//     id: "clickImage",
//     title: "[SILK ROAD] 실행하기",
//     contexts: ["image"]
//   });
// });

// chrome.contextMenus.onClicked.addListener((info, tab) => {
//   if (info.menuItemId === "clickImage") {
//     const imageUrl = info.srcUrl;
//     const productId = extractProductId(imageUrl);

//     if (productId) {
//       const pageUrl = `https://www.musinsa.com/app/goods/${productId}`;
//       console.log(`Image URL: ${imageUrl}`);
//       console.log(`Page URL: ${pageUrl}`);
//       console.log(`Product ID: ${productId}`);
//       sendImageDataToServer(imageUrl, pageUrl, productId);
//     } else {
//       console.error("이미지 링크에서 id 추출 실패");
//     }
//   }
// });

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.action === 'fetchGoods') {
//     chrome.storage.local.get(['searchResults'], (result) => {
//       if (result.searchResults) {
//         sendResponse({ data: result.searchResults });
//       } else {
//         sendResponse({ error: 'No search results found' });
//       }
//     });
//     return true;
//   }
// });


const sendImageDataToServer = async (imageUrl, pageUrl, productId) => {
  try {
    const response = await fetch("http://127.0.0.1:5001/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ imageUrl, pageUrl, productId })
    });

    if (response.ok) {
      const data = await response.json();
      console.log("이미지 링크 전송 성공");

      // 서버로부터 받은 데이터가 배열 형태인지 확인
      if (Array.isArray(data)) {
        chrome.storage.local.set({ searchResults: data }, () => {
          console.log("Search results saved to local storage.");
        });
      } else {
        console.error("서버 응답 형식 오류: 데이터가 배열 형식이 아닙니다.");
      }
    } else {
      console.error("이미지 링크 전송 실패");
    }
  } catch (error) {
    console.error("이미지 링크 전송 오류:", error);
  }
};

const extractProductId = (imageUrl) => {
  const regex = /\/(\d+)_\d+/;
  const match = imageUrl.match(regex);
  return match ? match[1] : null;
};

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "clickImage",
    title: "[SILK ROAD] 실행하기",
    contexts: ["image"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "clickImage") {
    const imageUrl = info.srcUrl;
    const productId = extractProductId(imageUrl);

    if (productId) {
      const pageUrl = `https://www.musinsa.com/app/goods/${productId}`;
      console.log(`Image URL: ${imageUrl}`);
      console.log(`Page URL: ${pageUrl}`);
      console.log(`Product ID: ${productId}`);
      sendImageDataToServer(imageUrl, pageUrl, productId);
    } else {
      console.error("이미지 링크에서 id 추출 실패");
    }
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'fetchGoods') {
    chrome.storage.local.get(['searchResults'], (result) => {
      if (result.searchResults) {
        sendResponse({ data: result.searchResults });
      } else {
        sendResponse({ error: 'No search results found' });
      }
    });
    return true;
  }
});
