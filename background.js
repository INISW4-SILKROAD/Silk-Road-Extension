// 서버로 사용자가 클릭한 이미지의 링크를 전송
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

      if (Array.isArray(data)) {
        chrome.storage.local.set({ searchResults: data }, () => {
          console.log("Search results saved to local storage.");
        });
      } else {
        console.error("서버 응답 형식 오류: 데이터가 배열 형식이 아님");
      }
    } else {
      console.error("이미지 링크 전송 실패");
    }
  } catch (error) {
    console.error("이미지 링크 전송 오류:", error);
  }
};


// 이미지 url로부터 상품 id를 추출
const extractProductId = (imageUrl) => {
  const regex = /\/(\d+)_\d+/;
  const match = imageUrl.match(regex);
  return match ? match[1] : null;
};


// 사용자가 우클릭해서 컨텍스트 메뉴 활성화
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "clickImage",
    title: "[SILK ROAD] 실행하기",
    contexts: ["image"]
  });
});


// 이미지 링크를 통해 상품 id과 페이지 링크 서버로 전송
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
