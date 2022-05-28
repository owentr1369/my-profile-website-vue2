import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sampleBlogCards: [
      {
        blogTitle: "TamTamMovies",
        blogCoverPhoto: "stock-1",
        blogDate: "May 1, 2021",
        blogGithubLink: "https://github.com/owentr1369/tamtammovies",
      },
      {
        blogTitle: "Anime Search App",
        blogCoverPhoto: "stock-2",
        blogDate: "May 1, 2021",
        blogGithubLink: "https://github.com/owentr1369/anime-search-app-vue3",
      },
      {
        blogTitle: "Flip Card Pokemon Memories",
        blogCoverPhoto: "stock-3",
        blogDate: "May 1, 2021",
        blogGithubLink:
          "https://github.com/owentr1369/flip-card-pokemon-memories",
      },
      {
        blogTitle: "F8 Music Player",
        blogCoverPhoto: "stock-4",
        blogDate: "May 1, 2021",
        blogGithubLink: "https://github.com/owentr1369/music_player-javascript",
      },
    ],
    editPosts: null,
  },
  mutations: {
    toggleEditPost(state, payload) {
      state.editPosts = payload;
      console.log(state.editPosts);
    },
  },
  actions: {},
  modules: {},
});
