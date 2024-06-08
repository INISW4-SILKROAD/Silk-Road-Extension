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
  

chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed');
  });
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'fetchGoods') {
      fetch('http://13.75.124.149:5001/goods')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => sendResponse({ data }))
        .catch(error => sendResponse({ error: error.message }));
  
      return true; // 비동기 응답을 위해 true를 반환합니다.
    }
  });
  