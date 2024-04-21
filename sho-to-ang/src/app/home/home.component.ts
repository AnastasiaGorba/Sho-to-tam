import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  changeColor(): void {}

  resetColor(): void {}

  sendEmail(): void {
    window.location.href = 'mailto:example@lpnu.ua';
  }

  videoElement!: HTMLVideoElement; 

  startCamera(): void {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        this.videoElement = document.createElement('video');
        this.videoElement.srcObject = stream;
        this.videoElement.autoplay = true;
        document.body.appendChild(this.videoElement);
      })
      .catch(error => console.error('Ошибка при доступе к камере:', error));
  }

  stopCamera(): void {
    if (this.videoElement && this.videoElement.srcObject) {
      const stream = this.videoElement.srcObject as MediaStream;
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop()); 
      this.videoElement.remove(); 
    }
  }
}