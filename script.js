let savedText = localStorage.getItem('textFromTextarea')

if(savedText){
    document.getElementById('textArea').value = savedText
}



function getText() {
    let textarea = document.getElementById("textArea");
    
    let text = textarea.value;
    console.log(text);
    
    localStorage.setItem('textFromTextarea', text);
  }



  document.getElementById('downloadButton').addEventListener('click', function() {
    var text = document.getElementById('textArea').value;
  
    var blob = new Blob([text], { type: 'text/plain' });
  
    var a = document.createElement('a');
    a.href = window.URL.createObjectURL(blob);
  
    a.download = 'textarea_content.txt';
  
    document.body.appendChild(a);
    a.click();
  
    document.body.removeChild(a);
    window.URL.revokeObjectURL(a.href);
  });
  

  document.getElementById('saveAsHtmlButton').addEventListener('click', function() {
    var text = document.getElementById('textArea').value;
  
    var htmlContent = '<!DOCTYPE html>\n<html>\n<head>\n<title>Textarea Content</title>\n</head>\n<body>\n<pre>' + text + '</pre>\n</body>\n</html>';
  
    var blob = new Blob([htmlContent], { type: 'text/html' });
  
    var a = document.createElement('a');
    a.href = window.URL.createObjectURL(blob);
    a.download = 'textarea_content.html';
  
    document.body.appendChild(a);
    a.click();
  
    document.body.removeChild(a);
    window.URL.revokeObjectURL(a.href);
  });
  