/* global Version */

/**
  * Получить версию объекта.
  * @customfunction
  * @param {string} object имя объекта.
  * @return {string} версия объекта.
  */
async function Version(object) {
  try {
    //You can change this URL to any web request you want to work with.
    const url = "https://consultant.sbis.ru/service/";
    const response = await fetch(url, {
                                     method: 'POST',
                                     headers: {
                                       'Accept': 'application/json, text/javascript, */*; q=0.01',
                                       'Content-Type': 'application/json; charset=UTF-8'
                                     },
                                     body: '{"jsonrpc":"2.0","protocol":7,"method":"Платформа.Версия","params":{"Объект":"' + object + '"},"id":1}'
                                   });
    //Expect that status code is in 200-299 range
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    const jsonResponse = await response.json();
    return jsonResponse.result;
  }
  catch (error) {
    return error;
  }
}
