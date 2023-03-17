var canvas = document.getElementById('Canvas');
		var context = canvas.getContext("2d");
		var nyeriL = document.getElementById('nyeriL');
		var nyeriR = document.getElementById('nyeriR');
		var executed = false;
		var idpsn = document.getElementById('idpasien');
		var dataUrl = document.getElementById('dataUrl');
		var baseUrl = document.getElementById('baseUrl');
		var mapSprite = new Image();
		if (nyeriL.value != '' && nyeriR.value != '' ) {
			mapSprite.src = baseUrl.dataset.url+"asesmen/gambar_nyeri_irna/"+baseUrl.dataset.idp+".png";
		}else{
			mapSprite.src = baseUrl.dataset.url+"assets/images/female-male-body-shapes.png";
		}
		
		var Marker = function () {
			this.Sprite = new Image();
			this.Sprite.src = baseUrl.dataset.url+"assets/images/map-marker-hi.png"
			this.Width = 12;
			this.Height = 20;
			this.XPos = 0;
			this.YPos = 0;
		}
		var Markers = new Array();
		var mouseClicked = function (mouse) {
			var rect      = canvas.getBoundingClientRect();
			var mouseXPos = (mouse.x - rect.left);
			var mouseYPos = (mouse.y - rect.top);
			var marker    = new Marker();
			marker.XPos   = mouseXPos - (marker.Width / 2);
			marker.YPos   = mouseYPos - marker.Height;
			nyeriL.value = marker.XPos;
			nyeriR.value = marker.YPos;
			Markers.push(marker);
		}
		canvas.addEventListener("mousedown", mouseClicked, false);
		canvas.addEventListener('contextmenu', function(ev) {
			ev.preventDefault();
			context.clearRect(0, 0, canvas.width, canvas.height);
		}, false);
		var firstLoad = function () {
			context.font = "15px Georgia";
			context.textAlign = "center";
		}
		firstLoad();
		var main = function () {
			//draw();
		};
		var draw = function () {
			context.fillStyle = "#fff";
			context.fillRect(0, 0, canvas.width, canvas.height);
			context.drawImage(mapSprite, 0, 0, 200, 200);
			for (var i = 0; i < Markers.length; i++) {
				context.drawImage(mapSprite, 0, 0, 200, 200);
				var tempMarker = Markers[i];
				context.drawImage(tempMarker.Sprite, tempMarker.XPos, tempMarker.YPos, tempMarker.Width, tempMarker.Height);
				var markerText = '';
				var textMeasurements = context.measureText(markerText);
				context.fillStyle = "#666";
				context.globalAlpha = 0.7;
				context.fillRect(tempMarker.XPos - (textMeasurements.width / 2), tempMarker.YPos - 15, textMeasurements.width, 20);
				context.globalAlpha = 1;
				context.fillStyle = "#000";
				context.fillText(markerText, tempMarker.XPos, tempMarker.YPos);
			}
			if (!executed){
				dataUrl.value = canvas.toDataURL();
			}

		};
		setInterval(main, (1000 / 60));
		$("#skor_index_barthel").click(function(){
			$('#skrining_func').each(function(){
				var totalPoints = 0;
				$(this).find('input').each(function(i,n){
					totalPoints += parseInt($(n).val(),10); 
				});
				$('#skor_index_barthel').val(totalPoints);
			});
		});