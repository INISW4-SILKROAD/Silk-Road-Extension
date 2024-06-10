// 서버로 데이터를 전송
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
      console.log("이미지 링크 전송 성공");
    } else {
      console.error("이미지 링크 전송 실패");
    }
  } catch (error) {
    console.error("이미지 링크 전송 오류:", error);
  }
};

// 이미지 링크에서 상품 ID를 추출
const extractProductId = (imageUrl) => {
  const regex = /\/(\d+)_\d+/;
  const match = imageUrl.match(regex);
  return match ? match[1] : null;
};

// 컨텍스트 메뉴 항목 생성
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "clickImage",
    title: "[SILK ROAD] 실행하기",
    contexts: ["image"]
  });
});

// 컨텍스트 메뉴 항목 클릭 이벤트 처리
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "clickImage") {
    const imageUrl = info.srcUrl;
    const productId = extractProductId(imageUrl);

    if (productId) {
      const pageUrl = `https://www.musinsa.com/app/goods/${productId}`;
      console.log(`Image URL: ${imageUrl}`);
      console.log(`Page URL: ${pageUrl}`);
      sendImageDataToServer(imageUrl, pageUrl);
    } else {
      console.error("이미지 링크에서 id 추출 실패");
    }
  }
});

// 상품 데이터를 서버로부터 가져오기
const fetchGoodsFromServer = async () => {
  try {
    const response = await fetch('http://127.0.0.1:5001/goods'); // 로컬 서버
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching goods: ' + error.message);
  }
};

// 메시지 리스너
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'fetchGoods') {
    fetchGoodsFromServer()
      .then(data => sendResponse({ data: data }))
      .catch(error => sendResponse({ error: error.message }));
    return true; 
  }
});

