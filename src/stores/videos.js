import { defineStore } from 'pinia';



export const useVideoRecordings = defineStore("videos", {

    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        videos: JSON.parse(localStorage.getItem('videos')),
        settings: JSON.parse(localStorage.getItem('settings')),


    }),
    actions: {
        saveVideo(data) {

            // update pinia state
            // this.videos = this.videos || [];
            // this.videos.push(data.video)

            // localStorage.setItem('videos', JSON.stringify(this.videos.push(data.video)));
            console.log(data.video)


        },

    }
});