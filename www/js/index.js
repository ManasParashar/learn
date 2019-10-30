/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/*$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=London&APPID=7ff99eb8b9891db329a2e55eea844832", 
    function(data) {
        console.log(data);
        console.log($("#temp"));
	    $("#temp")[0].append(data.name);
    });
*/

            let app = {
                init: function(){
                    console.log("in init");
                    document.getElementById('btn').addEventListener('click', app.takephoto);
                
                },
                takephoto: function(){
                    console.log('taking picture');
                    let opts = {
                        quality: 80,
                        destinationType: Camera.DestinationType.DATA_URL,
                        sourceType: Camera.PictureSourceType.CAMERA,
                        mediatype: Camera.MediaType.PICTURE,
                        //encodingType: Camera.Encoding.JPEG,
                        cameraDirection: Camera.Direction.BACK,
                        targetWidth: 300,
                        targetHeight: 400
                    };
                    
                    navigator.camera.getPicture(app.success, app.failure, opts);
                },
                success: function(imgURI){
                    document.getElementById('msg').textContent = imgURI;
                    alert("test");
                    alert(document.getElementById('photo'));
                    document.getElementById('photo').src = "data:image/jpeg;base64," + imgURI;
                },
                failure: function(){
                    document.getElementById('msg').textContent = imgURI;
                }
            };
            document.addEventListener('deviceready', app.init, false);

