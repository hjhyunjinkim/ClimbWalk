    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = { 
            center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 10 // 지도의 확대 레벨 
        }; 

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
    // 지도 클릭 이벤트를 등록한다 (좌클릭 : click, 우클릭 : rightclick, 더블클릭 : dblclick)


    var positions = [
        {   content :'<div>북한산</div>',
            title: '북한산', 
            latlng: new kakao.maps.LatLng(37.65862583654199, 126.97799135391493)
        },
        {   content: '<div>관악산</div>',
            title: '관악산',
            latlng: new kakao.maps.LatLng(37.444446086730125, 126.96390589908358)
        },
        {   content: '<div>도봉산</div>',
            title: '도봉산',
            latlng: new kakao.maps.LatLng(37.698954701146846, 127.01534182371395)
        },
        {   content:'<div>아차산</div>',
            title: '아차산',
            latlng: new kakao.maps.LatLng(37.566970674417924, 127.10269799004755)
        },
        {   content: '<div>인왕산</div>',
            title: '인왕산',
            latlng: new kakao.maps.LatLng(37.58473038636543, 126.95787170385339)
        },
        {   content: '<div>청계산</div>',
            title: '청계산',
            latlng: new kakao.maps.LatLng(37.929340569283625, 127.36809794328788)
        },
        {   content: '<div>남한산</div>',
            title: '남한산',
            latlng: new kakao.maps.LatLng(37.4804418994252, 127.20411866230454)
        },
        {   content: '<div>불암산</div>',
            title: '불암산',
            latlng: new kakao.maps.LatLng(37.66348170808437, 127.09531655482006)
        },
        {   content: '<div>삼성산</div>',
            title: '삼성산',
            latlng: new kakao.maps.LatLng(37.435912419741626, 126.93932269667725)
        },
        {   content: '<div>수락산</div>',
            title: '수락산',
            latlng: new kakao.maps.LatLng(37.69917077835829, 127.08152847266497)
        }
    ];

    // 마커 이미지의 이미지 주소입니다
    var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
        
        
        // 마커 이미지의 이미지 크기 입니다
        var imageSize = new kakao.maps.Size(24, 35); 
        
        // 마커 이미지를 생성합니다    
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
        mountains = new Array;
        // 마커를 생성합니다
        
        
        var marker1 = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[0].latlng, // 마커를 표시할 위치
            title : positions[0].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image : markerImage, // 마커 이미지
            
        });
        var marker2 = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[1].latlng, // 마커를 표시할 위치
            title : positions[1].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image : markerImage, // 마커 이미지
        });
        var marker3 = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[2].latlng, // 마커를 표시할 위치
            title : positions[2].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image : markerImage, // 마커 이미지
        });
        var marker4 = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[3].latlng, // 마커를 표시할 위치
            title : positions[3].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image : markerImage, // 마커 이미지
        });
        var marker5 = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[4].latlng, // 마커를 표시할 위치
            title : positions[4].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image : markerImage, // 마커 이미지
        });
        var marker6 = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[5].latlng, // 마커를 표시할 위치
            title : positions[5].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image : markerImage, // 마커 이미지
        });
        var marker7 = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[6].latlng, // 마커를 표시할 위치
            title : positions[6].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image : markerImage, // 마커 이미지
        });
        var marker8 = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[7].latlng, // 마커를 표시할 위치
            title : positions[7].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image : markerImage, // 마커 이미지
        });
        var marker9 = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[8].latlng, // 마커를 표시할 위치
            title : positions[8].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image : markerImage, // 마커 이미지
        });
        var marker10 = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[9].latlng, // 마커를 표시할 위치
            title : positions[9].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image : markerImage, // 마커 이미지
        });

        
        
            kakao.maps.event.addListener(marker1, 'click', function() {
            location.href = "북한산.html";}	);
        
            kakao.maps.event.addListener(marker2, 'click', function() {
            location.href = "관악산.html";}	);
            
            kakao.maps.event.addListener(marker3, 'click', function() {
            location.href = "도봉산.html";}	);
            
            kakao.maps.event.addListener(marker4, 'click', function() {
            location.href = "아차산.html";}	);
            
            kakao.maps.event.addListener(marker5, 'click', function() {
            location.href = "인왕산.html";}	);
                
            kakao.maps.event.addListener(marker6, 'click', function() {
            location.href = "청계산.html";}	);
            
            kakao.maps.event.addListener(marker7, 'click', function() {
            location.href = "남한산.html";}	);
                            
            kakao.maps.event.addListener(marker8, 'click', function() {
            location.href = "불암산.html";}	);

            kakao.maps.event.addListener(marker9, 'click', function() {
            location.href = "삼성산.html";}	);
            
            kakao.maps.event.addListener(marker10, 'click', function() {
            location.href = "수락산.html";}	);

            recommand();
            function recommand(){
                navigator.geolocation.getCurrentPosition(function(position){
                    var lat = position.coords.latitude, // 위도
                        lon = position.coords.longitude;
                        compare_lat = [];
                        compare_lon =[];
                        compare_position=[];            // 현재 위도와 산의 위도를 비교하고 절대값을 저장합니다.
                        for(var i=0;i<positions.length;i++){
                            compare_lat[i] = positions[i].latlng.getLat()-lat;
                            compare_lon[i] = positions[i].latlng.getLng()-lon;
                            compare_position[i] = Math.abs(compare_lat[i])+Math.abs(compare_lon[i]);
                        }
                        var min = compare_position[0];
                        var j = 0;                      // 위도와 경도의 차의 절대값을 더하고 가장 작은 값의 index를 찾습니다.
                        for(var i=0;i<compare_position.length;i++){
                            if(compare_position[i]<min){
                                min = compare_position[i];
                                j = i;
                            }
                        }
                        document.getElementById('nearest').innerText = "현재 사용자 위치에서 가장 가까운 산은 "+positions[j].title+ "입니다.";
            } )
                
        
        }


    // HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
    if (navigator.geolocation) {
        
        // GeoLocation을 이용해서 접속 위치를 얻어옵니다
        navigator.geolocation.getCurrentPosition(function(position) {
            
            var lat = position.coords.latitude, // 위도
                lon = position.coords.longitude; // 경도
            
            var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
                message = '<div style="padding:5px;">현재 여기에 있어요!</div>'; // 인포윈도우에 표시될 내용입니다
            
            // 마커와 인포윈도우를 표시합니다
            displayMarker(locPosition, message);
            
        });
        
    } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
        
        var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),    
            message = 'geolocation을 사용할수 없어요..'
            
        displayMarker(locPosition, message);
    }
    
    // 지도에 마커와 인포윈도우를 표시하는 함수입니다
    function displayMarker(locPosition, message) {

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({  
            map: map, 
            position: locPosition
        }); 
        
        var iwContent = message, // 인포윈도우에 표시할 내용
            iwRemoveable = true;

        // 인포윈도우를 생성합니다
        var infowindow = new kakao.maps.InfoWindow({
            content : iwContent,
            removable : iwRemoveable
        });
        
        // 인포윈도우를 마커위에 표시합니다 
        infowindow.open(map, marker);
        
        // 지도 중심좌표를 접속위치로 변경합니다
        map.setCenter(locPosition);      
    }    

    var gps_use = null; //gps의 사용가능 여부
    var gps_lat = null; // 위도
    var gps_lng = null; // 경도
    var gps_position; // gps 위치 객체

    gps_check();
    // gps가 이용가능한지 체크하는 함수이며, 이용가능하다면 show location 함수를 불러온다.
    // 만약 작동되지 않는다면 경고창을 띄우고, 에러가 있다면 errorHandler 함수를 불러온다.
    // timeout을 통해 시간제한을 둔다.
    function gps_check(){
        if (navigator.geolocation) {
            var options = {timeout:60000};
            navigator.geolocation.getCurrentPosition(showLocation, errorHandler, options);
        } else {
            alert("GPS_추적이 불가합니다.");
            gps_use = false;
        }
    }

    // gps 이용 가능 시, 위도와 경도를 반환하는 showlocation함수.
    function showLocation(position) {
        gps_use = true;
        gps_lat = position.coords.latitude;
        gps_lng = position.coords.longitude;
    }

    // error발생 시 에러의 종류를 알려주는 함수.
    function errorHandler(error) {
        if(error.code == 1) {
            alert("접근차단");
        } else if( err.code == 2) {
            alert("위치를 반환할 수 없습니다.");
        }
        gps_use = false;
    }


    function gps_tracking(){
        if (gps_use) {
            map.panTo(new kakao.maps.LatLng(gps_lat,gps_lng));
            var gps_content = '<div><img class="pulse" draggable="false" unselectable="on" src="https://ssl.pstatic.net/static/maps/m/pin_rd.png" alt=""></div>';
            var currentOverlay = new kakao.maps.CustomOverlay({
                position: new kakao.maps.LatLng(gps_lat,gps_lng),
                content: gps_content,
                map: map
            });
            currentOverlay.setMap(map);
        } else {
        alert("접근 차단하신 경우 새로고침, 아닌 경우 잠시만 기다려주세요.");
        gps_check();
        }
    }


    const url_AirQuality = "http://openAPI.seoul.go.kr:8088/547553446c736572353449546d4f43/json/ListAvgOfSeoulAirQualityService/1/5/";
            fetch(url_AirQuality)
            .then(res => res.json())
            .then(myJson => {
                //document.getElementById('AirQuality').innerText = JSON.stringify(myJson);
                //평균
                let GRADE = JSON.stringify(myJson["ListAvgOfSeoulAirQualityService"]["row"][0].GRADE);  
            // document.getElementById('AirQuality').innerText += GRADE ;
                //console.log(GRADE); 
                if(GRADE=='"좋음"'){
                    document.getElementById('qualityFace').src = "./images/happy.png"
                    document.getElementById('AirQuality').innerText += "\n" + "금일 평균 대기환경 상태는 " + GRADE+" 이며, 등산하기 아주 좋은 날씨입니다!" ;
                    }
                else if(GRADE=='"보통"'){
                    document.getElementById('qualityFace').src = "./images/medium.png"
                    document.getElementById('AirQuality').innerText += "\n" + "금일 평균 대기환경 상태는 " + GRADE+" 이며, 등산하기 무난한 날씨입니다!" ;
                    }
                else if(GRADE=='"나쁨"'){
                    document.getElementById('qualityFace').src = "./images/bad.png"
                    document.getElementById('AirQuality').innerText += "\n" + "금일 평균 대기환경 상태는 " + GRADE+" 이며, 다른 날 등산해보는 건 어떨까요?" ;
                    }
                else if(GRADE=='"매우나쁨"'){
                    document.getElementById('qualityFace').src = "./images/verybad.png"
                    document.getElementById('AirQuality').innerText += "\n" + "금일 평균 대기환경 수치는 " + GRADE+" 이며, 등산하기 부적합한 날씨입니다!" ;
                    
                }

                //오존
                let OZONE = JSON.stringify(myJson["ListAvgOfSeoulAirQualityService"]["row"][0].OZONE);
                //document.getElementById('AirQuality').innerText += "\n" + OZONE ;
                //console.log(OZONE); 

                let 오존 = "";
                if(OZONE <= 0.030){
                    오존 = "좋음";
                }else if (OZONE <= 0.090){
                    오존 = "보통";
                }else if (OZONE <= 0.150){
                    오존 = "나쁨";
                }else if (OZONE > 0.151){
                    오존 = "매우나쁨";
                }else {
                    오존 = "점검중";
                }
                document.getElementById('Ozone').innerText += "금일 오존 상태는 " + 오존+" 이며, 수치는 "+ OZONE+" 입니다.";

                //미세먼지
                let PM10 = JSON.stringify(myJson["ListAvgOfSeoulAirQualityService"]["row"][0].PM10);
                //document.getElementById('AirQuality').innerText += "\n" + PM10 ;
                //console.log(PM10); 

                let 미세먼지 = "";
                if(PM10 <= 30){
                    미세먼지  = "좋음";
                }else if (PM10 <= 80){
                    미세먼지  = "보통";
                }else if (PM10 <= 150){
                    미세먼지  = "나쁨";
                }else if (PM10 > 151){
                    미세먼지  = "매우나쁨";
                }else {
                    미세먼지  = "점검중";
                }
                document.getElementById('finedust').innerText += "금일 미세먼지 수치는 " + 미세먼지+" 이며, 수치는 "+ PM10+" 입니다."

                //초미세먼지
                let PM25 = JSON.stringify(myJson["ListAvgOfSeoulAirQualityService"]["row"][0].PM25);
                //document.getElementById('AirQuality').innerText += "\n" + PM25 ;
                //console.log(PM25); 

                let 초미세먼지 = "";
                if(PM25 <= 15){
                    초미세먼지  = "좋음";
                }else if (PM25 <= 35){
                    초미세먼지  = "보통";
                }else if (PM25 <= 75){
                    초미세먼지  = "나쁨";
                }else if (PM25 > 76){
                    초미세먼지  = "매우나쁨";
                }else {
                    초미세먼지  = "점검중";
                }
                document.getElementById('veryfinedust').innerText += "금일 초미세먼지 수치는 " + 초미세먼지+" 이며, 수치는 "+ PM25+" 입니다.";
            });
        
            const url_walkDulaeInfo = "http://openapi.seoul.go.kr:8088/547553446c736572353449546d4f43/json/walkDulaeInfo/1/5/"
            fetch(url_walkDulaeInfo)
            .then(res => res.json())
            .then(myJson => {
                //document.getElementById('walkDulaeInfo').innerText = JSON.stringify(myJson, null, 1);
                walkDulaeInfo_length = JSON.stringify(myJson["walkDulaeInfo"]["row"]).length
                for (var i = 0; i < walkDulaeInfo_length; i++){
                //자치구
                let 자치구 = JSON.stringify(myJson["walkDulaeInfo"]["row"][i].AREA_GU);
                document.getElementById('walkDulaeInfo').innerHTML += "<br />" + "자치구:" + 자치구; 
                console.log(자치구); 

                //거리
                let 거리 = JSON.stringify(myJson["walkDulaeInfo"]["row"][i].DISTANCE);
                document.getElementById('walkDulaeInfo').innerHTML += "<br />" + "거리:" + 거리 ;
                console.log(거리); 

                //코스명
                let 코스명 = JSON.stringify(myJson["walkDulaeInfo"]["row"][i].COURSE_NAME);  
                document.getElementById('walkDulaeInfo').innerHTML += "<br />" + "코스명:" + 코스명 ;
                console.log(코스명); 

                //상세코스
                let 상세코스 = JSON.stringify(myJson["walkDulaeInfo"]["row"][i].DETAIL_COURSE);  
                document.getElementById('walkDulaeInfo').innerHTML += "<br />" + "상세코스:" +  상세코스 ;
                console.log(상세코스); 

                //코스 난이도 
                let 난이도 = JSON.stringify(myJson["walkDulaeInfo"]["row"][i].COURSE_LEVEL);  
                document.getElementById('walkDulaeInfo').innerHTML += "<br />" + "난이도:" + 난이도  ;
                console.log(난이도); 

                document.getElementById('walkDulaeInfo').innerHTML += "<br />"
                }

            });
            

            //한양도성길 코스정보
            const url_walkDoseongInfo = "http://openapi.seoul.go.kr:8088/547553446c736572353449546d4f43/json/walkDoseongInfo/1/5/"
            fetch(url_walkDoseongInfo, {
                headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
            })
            .then(res => res.json())
            .then(myJson => {
                //document.getElementById('walkDoseongInfo').innerText = JSON.stringify(myJson, null, 1);
                walkDoseongInfo_length = JSON.stringify(myJson["walkDoseongInfo"]["row"]).length
                for (var i = 0; i < walkDoseongInfo_length; i++){
                //자치구
                let 자치구 = JSON.stringify(myJson["walkDoseongInfo"]["row"][i].AREA_GU);  
                document.getElementById('walkDoseongInfo').innerHTML += "<br />" + "자치구:" + 자치구 ;
                console.log(자치구); 

                //거리
                let 거리 = JSON.stringify(myJson["walkDoseongInfo"]["row"][i].DISTANCE);  
                document.getElementById('walkDoseongInfo').innerHTML += "<br />" + "거리:" + 거리 ;
                console.log(거리); 

                //코스명
                let 코스명 = JSON.stringify(myJson["walkDoseongInfo"]["row"][i].COURSE_NAME);  
                document.getElementById('walkDoseongInfo').innerHTML += "<br />" + "코스명:" + 코스명 ;
                console.log(코스명); 

                //상세코스
                let 상세코스 = JSON.stringify(myJson["walkDoseongInfo"]["row"][i].DETAIL_COURSE);  
                document.getElementById('walkDoseongInfo').innerHTML += "<br />" + "상세코스:" +  상세코스 ;
                console.log(상세코스); 

                //코스 난이도 
                let 난이도 = JSON.stringify(myJson["walkDoseongInfo"]["row"][i].COURSE_LEVEL);  
                document.getElementById('walkDoseongInfo').innerHTML += "<br />" + "난이도:" + 난이도  ;
                console.log(난이도); 

                document.getElementById('walkDoseongInfo').innerHTML += "<br />"
                }

            });

            //서울두드림길 근교산자락길 코스정보
            const url_walkGeungyosanInfo= "http://openapi.seoul.go.kr:8088/547553446c736572353449546d4f43/json/walkGeungyosanInfo/1/5/"
            fetch(url_walkGeungyosanInfo)
            .then(res => res.json())
            .then(myJson => {
                //document.getElementById('walkGeungyosanInfo').innerText = JSON.stringify(myJson, null, 1);
                walkGeungyosanInfo_length = JSON.stringify(myJson["walkGeungyosanInfo"]["row"]).length
                for (var i = 0; i < walkGeungyosanInfo_length; i++){
                //자치구
                let 자치구 = JSON.stringify(myJson["walkGeungyosanInfo"]["row"][i].AREA_GU);  
                document.getElementById('walkGeungyosanInfo').innerHTML += "<br />" + "자치구:" + 자치구 ;
                console.log(자치구); 

                //거리
                let 거리 = JSON.stringify(myJson["walkGeungyosanInfo"]["row"][i].DISTANCE);  
                document.getElementById('walkGeungyosanInfo').innerHTML += "<br />" + "거리:" + 거리 ;
                console.log(거리); 

                //코스명
                let 코스명 = JSON.stringify(myJson["walkGeungyosanInfo"]["row"][i].COURSE_NAME);  
                document.getElementById('walkGeungyosanInfo').innerHTML += "<br />" + "코스명:" + 코스명 ;
                console.log(코스명); 

                //상세코스
                let 상세코스 = JSON.stringify(myJson["walkGeungyosanInfo"]["row"][i].DETAIL_COURSE);  
                document.getElementById('walkGeungyosanInfo').innerHTML += "<br />" + "상세코스:" +  상세코스 ;
                console.log(상세코스); 

                //코스 난이도 
                let 난이도 = JSON.stringify(myJson["walkGeungyosanInfo"]["row"][i].COURSE_LEVEL);  
                document.getElementById('walkGeungyosanInfo').innerHTML += "<br />" + "난이도:" + 난이도  ;
                console.log(난이도); 

                document.getElementById('walkGeungyosanInfo').innerHTML += "<br />"
                }
            
            })


            //서울두드림길 한강/지천길 코스정보
            const url_walkHangangInfo = "http://openapi.seoul.go.kr:8088/547553446c736572353449546d4f43/json/walkHangangInfo/1/5/"
            fetch(url_walkHangangInfo)
            .then(res => res.json())
            .then(myJson => {
                //document.getElementById('walkHangangInfo').innerText = JSON.stringify(myJson, null, 1);
                walkHangangInfo_length = JSON.stringify(myJson["walkHangangInfo"]["row"]).length
                for (var i = 0; i < walkHangangInfo_length; i++){
                //자치구
                let 자치구 = JSON.stringify(myJson["walkHangangInfo"]["row"][i].AREA_GU);  
                document.getElementById('walkHangangInfo').innerHTML += "<br />" + "자치구:" + 자치구 ;
                console.log(자치구); 

                //거리
                let 거리 = JSON.stringify(myJson["walkHangangInfo"]["row"][i].DISTANCE);  
                document.getElementById('walkHangangInfo').innerHTML += "<br />" + "거리:" + 거리 ;
                console.log(거리); 

                //코스명
                let 코스명 = JSON.stringify(myJson["walkHangangInfo"]["row"][i].COURSE_NAME);  
                document.getElementById('walkHangangInfo').innerHTML += "<br />" + "코스명:" + 코스명 ;
                console.log(코스명); 

                //상세코스
                let 상세코스 = JSON.stringify(myJson["walkHangangInfo"]["row"][i].DETAIL_COURSE);  
                document.getElementById('walkHangangInfo').innerHTML += "<br />" + "상세코스:" +  상세코스 ;
                console.log(상세코스); 

                //코스 난이도 
                let 난이도 = JSON.stringify(myJson["walkHangangInfo"]["row"][i].COURSE_LEVEL);  
                document.getElementById('walkHangangInfo').innerHTML += "<br />" + "난이도:" + 난이도  ;
                console.log(난이도); 

                document.getElementById('walkHangangInfo').innerHTML += "<br />"
                }
                
            }) ;
            //산사태 예측 모델
            fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent('http://apis.data.go.kr/1400000/predictionInfoService/predictionInfoList?ServiceKey=pgSFXq7JRCZhMaWViaF%2FyAF0ICZWKle3przI5MSYiq%2FP89Qn8A5cHZn1RbTB56IwbIh3eTLkyuBQy%2Bv9A9PewA%3D%3D&_type=json&numOfRows=1000')}`)
        .then(response => {
	        if (response.ok) return response.json()
        	throw new Error('Network response was not ok.')
        })
        .then(myJson => {
        //document.getElementById('landslide').innerText = JSON.stringify(myJson);
        //console.log(JSON.stringify(myJson['response']['body']['items']['item']));
        console.log(JSON.stringify(myJson['response']['body']['items']['item'][0]));

        const landslide_length = JSON.stringify(myJson['response']['body']['items']['item'].length);

        var obj = [];
        for (var i = 0; i < landslide_length; i++){
            const name = JSON.stringify(myJson['response']['body']['items']['item'][i].sgg);
            console.log(JSON.stringify(myJson['response']['body']['items']['item'][i].sgg));

            obj[JSON.stringify(myJson['response']['body']['items']['item'][i].sgg)] = (obj[JSON.stringify(myJson['response']['body']['items']['item'][i].sgg)] || 0) + 1;
        }    
            console.log(obj)
        
        
            for (var key in obj){
            let 산사태예보 = ""
            if(obj[key]> 20 ){
                산사태예보  = "위험한 지역이에요!";
            }else if (obj[key]> 15){
                산사태예보  = "보통이에요";
            }else if (obj[key]> 10){
                산사태예보  = "안전한 편이에요!";
            }else if (obj[key]> 5){
                산사태예보  = "안전해요:)";
            }else {
                산사태예보  = "점검중";
            }
            
            document.getElementById('landslide').innerText += "\n"+ "산사태예보:" +key+ 산사태예보 ;
            //콘솔창에 지역 확인
           }
        });
            
            
        //산불 위험 지수 모델

        filterSelection("all")
        function filterSelection(c) {
            var x, i;
            x = document.getElementsByClassName("filterDiv");
            if (c == "all") c = "";
            for (i = 0; i < x.length; i++) {
                RemoveClass(x[i], "show");
                if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
            }
        }

        function AddClass(element, name) {
            var i, arr1, arr2;
            arr1 = element.className.split(" ");
            arr2 = name.split(" ");
            for (i = 0; i < arr2.length; i++) {
                if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
            }
        }

        function RemoveClass(element, name) {
            var i, arr1, arr2;
            arr1 = element.className.split(" ");
            arr2 = name.split(" ");
            for (i = 0; i < arr2.length; i++) {
                while (arr1.indexOf(arr2[i]) > -1) {
                arr1.splice(arr1.indexOf(arr2[i]), 1);     
                }
            }
            element.className = arr1.join(" ");
        }

        var btnContainer = document.getElementById("myBtnContainer");
        var btns = btnContainer.getElementsByClassName("btn");
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function(){
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            });
        }

