import '../index.css'
function Map() {
 
    return (
      <div className="App">
        {/* Header 區塊 - 取自 header.html */}
        
  
        {/* 首頁內容 - 取自 index.html */}
        <div className="body1">
          
         
          {/* Google Map 區塊 */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.699681017951!2d121.20433681109792!3d24.908223577805977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468230c50854f31%3A0x4c463b2d6771f1d2!2z5pmi55Ge5a-m5qWt5pyJ6ZmQ5YWs5Y-4!5e0!3m2!1szh-TW!2stw!4v1736919437948!5m2!1szh-TW!2stw"
            width="100%"
            height="100"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="map"
          ></iframe>
        </div>
    </div>
    )
}
export default Map;