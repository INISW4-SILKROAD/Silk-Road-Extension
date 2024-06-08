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
  


const fetchGoodsFromServer = async () => {
  try {
    const response = await fetch('http://127.0.0.1:5001/goods'); // Azure VM에서 서버가 실행 중이어야 합니다.
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching goods: ' + error.message);
  }
};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'fetchGoods') {
    fetchGoodsFromServer()
      .then(data => sendResponse({ data: data }))
      .catch(error => sendResponse({ error: error.message }));
    return true;  // Will respond asynchronously.
  }
});
