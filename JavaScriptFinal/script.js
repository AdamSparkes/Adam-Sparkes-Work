function StrConv(obj) {
    return JSON.stringify(obj, (key, value) => {
     
      if (typeof value === 'string' && key !== 'id') {
       
        return value;
      }
    
      return value;
    });
  }
  
  fetch('cars.json')
    .then(response => response.json())
    .then(data => {
      data.forEach(record => {
        console.log('Model:', record.model);
      });
  
      function TotalRec(data) {
        return `Total records: ${StrConv(data.length)}`;
      }
  
      function FirstRec(data) {
        return `First record: ${StrConv(data[0])}`;
      }
  
      function LastRec(data) {
        return `Last record: ${StrConv(data[data.length - 1])}`;
      }
  
      const output = document.getElementById('output');
  
      output.innerHTML += `<p>${TotalRec(data)}</p>`;
      output.innerHTML += `<p>${FirstRec(data)}</p>`;
      output.innerHTML += `<p>${LastRec(data)}</p>`;
  
      console.log('JSON Data:', data);
    })
    .catch(error => console.error('Error fetching data:', error));