import { defineStore } from 'pinia';



export const useVideoRecordings = defineStore("videos", {

    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        videos: [],
        // videos: JSON.parse(localStorage.getItem('videos')),
        settings: [],
        camera: [],


    }),
    actions: {
        saveVideo(data) {

            // update pinia state
            this.videos = this.videos || [];
            this.videos.push(data)

            // localStorage.setItem('videos', JSON.stringify(this.videos));
            console.log(this.videos)


        },
        saveSettings(data, camera) {

            // update pinia state
            this.settings = data;
            this.camera = camera;


            // localStorage.setItem('settings', JSON.stringify(this.settings));
            console.log(this.settings, this.camera)


        },


    }
});