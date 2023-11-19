import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import matches from "./matches";

  
  function totalMore(array) {
    let homeMore = 0;
    let guestMore = 0;
    let totalMore = 0;
    let bothMore = 0;
    let bothLess = 0;
    let moreLess = 0;
    for(let i=0; i<array.length; i++){
        // console.log(array[i],"array[i]")
        if(array[i].homeResult-array[i].homeTotal>0){
            homeMore++;
        }
  
        if(array[i].guestResult-array[i].guestTotal>0){
            guestMore++;
        } 
  
        if((array[i].homeResult-array[i].homeTotal>0)&&(array[i].guestResult-array[i].guestTotal>0)) {
            bothMore++;
        }
  
        if((array[i].homeResult-array[i].homeTotal<0)&&(array[i].guestResult-array[i].guestTotal<0)) {
            bothLess++;
        }
    }
  
    totalMore=homeMore+guestMore;
    moreLess=array.length - (bothMore+bothLess)
  
    let procentHomeMore = Math.round((homeMore/array.length)*100);
    let procentGuestMore = Math.round((guestMore/array.length)*100);
    let procentTotalMore = Math.round((totalMore/(2*array.length))*100);

    let procentBothMore = Math.round((bothMore/array.length)*100);
    let procentBothLess = Math.round((bothLess/array.length)*100);
    let procentMoreLess = Math.round((moreLess/array.length)*100);
  
    let results = {
        homeMore: homeMore,
        guestMore: guestMore,
        totalMore: totalMore,
        bothMore: bothMore,
        bothLess: bothLess,
        moreLess: moreLess,
        numberOfMatches: array.length,
        procentHomeMore: procentHomeMore,
        procentGuestMore: procentGuestMore,
        procentTotalMore: procentTotalMore,
        procentBothMore: procentBothMore,
        procentBothLess: procentBothLess,
        procentMoreLess: procentMoreLess
    }
  
    return results;
  }

  let statistic = totalMore(matches);
  
  function teamMore(id, total) {
  

    let teamHomeMatches = matches.filter(item => item.homeTeamId === id);
    let teamHomeMatchesMore = teamHomeMatches.filter(item => item.homeResult > total);
    let procentHomeMore = Math.round((teamHomeMatchesMore.length/teamHomeMatches.length)*100);
  
    console.log(teamHomeMatches,"teamHomeMatches")
    console.log(teamHomeMatchesMore,"teamHomeMatchesMore")
    console.log(procentHomeMore,"procentHomeMore")

    let teamGuestMatches = matches.filter(item => item.guestTeamId === id);
    let teamGuestMatchesMore = teamGuestMatches.filter(item => item.guestResult > total);
    let procentGuestMore = Math.round((teamGuestMatchesMore.length/teamGuestMatches.length)*100);
  
    console.log(teamGuestMatches,"teamGuestMatches")
    console.log(teamGuestMatchesMore,"teamGuestMatchesMore")
    console.log(procentGuestMore,"procentGuestMore")
    
  
    return procentHomeMore;
  }
  
    // teamMore(13, 109.5);


let store = {
  _state: {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It is my first post', likesCount: 11},
          ], 
          newPostText: "it-kamasutra"
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
          ],
          dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Jack'},
            {id: 3, name: 'Andrey'},
            {id: 4, name: 'Sveta'},
          ],
          newMessageBody: "" 
    },
    nbaPage: {
        teams: [
            {id: 1, name: 'Oklahoma', logo: 'https://th.bing.com/th/id/OIP.oYk7eozlz5IEr5clV6WFXQHaGy?w=196&h=180&c=7&r=0&o=5&pid=1.7', homeMore: homeMore(1), guestMore: guestMore(1), homeEnemy: homeEnemy(1), guestEnemy: guestEnemy(1), middleHomePoints: middleHomePoints(1), middleGuestPoints: middleGuestPoints(1), middleHomeEnemyPoints: middleHomeEnemyPoints(1), middleGuestEnemyPoints: middleGuestEnemyPoints(1)}, 
            {id: 2, name: 'Denver', logo: 'https://th.bing.com/th/id/OIP.fpmVw_Nr1LRacu7aqdo-jQHaHa?w=185&h=185&c=7&r=0&o=5&pid=1.7', homeMore: homeMore(2), guestMore: guestMore(2), homeEnemy: homeEnemy(2), guestEnemy: guestEnemy(2), middleHomePoints: middleHomePoints(2), middleGuestPoints: middleGuestPoints(2), middleHomeEnemyPoints: middleHomeEnemyPoints(2), middleGuestEnemyPoints: middleGuestEnemyPoints(2)},
            {id: 3, name: 'Dallas', logo: 'https://th.bing.com/th/id/OIP.5BZMXnlb3aq73Oe1jGyRaAHaHa?w=177&h=180&c=7&r=0&o=5&pid=1.7', homeMore: homeMore(3), guestMore: guestMore(3), homeEnemy: homeEnemy(3), guestEnemy: guestEnemy(3), middleHomePoints: middleHomePoints(3), middleGuestPoints: middleGuestPoints(3), middleHomeEnemyPoints: middleHomeEnemyPoints(3), middleGuestEnemyPoints: middleGuestEnemyPoints(3)},
            {id: 4, name: 'Pelicans', logo: 'https://th.bing.com/th/id/OIP.0enw-0clle0IBrrE2IufuAHaHa?w=157&h=180&c=7&r=0&o=5&pid=1.7', homeMore: homeMore(4), guestMore: guestMore(4), homeEnemy: homeEnemy(4), guestEnemy: guestEnemy(4), middleHomePoints: middleHomePoints(4), middleGuestPoints: middleGuestPoints(4), middleHomeEnemyPoints: middleHomeEnemyPoints(4), middleGuestEnemyPoints: middleGuestEnemyPoints(4)},
            {id: 5, name: 'Clippers', logo: 'https://th.bing.com/th/id/OIP.e3GvdSFsxJcXur56xLhI4gHaHw?w=177&h=185&c=7&r=0&o=5&pid=1.7', homeMore: homeMore(5), guestMore: guestMore(5), homeEnemy: homeEnemy(5), guestEnemy: guestEnemy(5), middleHomePoints: middleHomePoints(5), middleGuestPoints: middleGuestPoints(5), middleHomeEnemyPoints: middleHomeEnemyPoints(5), middleGuestEnemyPoints: middleGuestEnemyPoints(5)},
            {id: 6, name: 'Sacramento', logo: 'https://th.bing.com/th/id/OIP.-kYBcSEkVSA_DnbsMRZtrAHaFV?w=245&h=180&c=7&r=0&o=5&pid=1.7', homeMore: homeMore(6), guestMore: guestMore(6), homeEnemy: homeEnemy(6), guestEnemy: guestEnemy(6), middleHomePoints: middleHomePoints(6), middleGuestPoints: middleGuestPoints(6), middleHomeEnemyPoints: middleHomeEnemyPoints(6), middleGuestEnemyPoints: middleGuestEnemyPoints(6)},
            {id: 7, name: 'Golden State', logo: 'https://th.bing.com/th/id/OIP.ApwViUp-DN7tbSvrB-NirgHaFj?w=225&h=180&c=7&r=0&o=5&pid=1.7', homeMore: homeMore(7), guestMore: guestMore(7), homeEnemy: homeEnemy(7), guestEnemy: guestEnemy(7), middleHomePoints: middleHomePoints(7), middleGuestPoints: middleGuestPoints(7), middleHomeEnemyPoints: middleHomeEnemyPoints(7), middleGuestEnemyPoints: middleGuestEnemyPoints(7)},
            {id: 8, name: 'Pxoenix', logo: 'https://th.bing.com/th/id/OIP.pTtB-y-s_WbC8oQOdd5Z7gHaHa?w=181&h=181&c=7&r=0&o=5&pid=1.7', homeMore: homeMore(8), guestMore: guestMore(8), homeEnemy: homeEnemy(8), guestEnemy: guestEnemy(8), middleHomePoints: middleHomePoints(8), middleGuestPoints: middleGuestPoints(8), middleHomeEnemyPoints: middleHomeEnemyPoints(8), middleGuestEnemyPoints: middleGuestEnemyPoints(8)},
            {id: 9, name: 'San Antonio', logo: 'https://th.bing.com/th/id/OIP.uvBPqxDtRYldZr2-ExRZgwHaHa?w=164&h=180&c=7&r=0&o=5&pid=1.7', homeMore: homeMore(9), guestMore: guestMore(9), homeEnemy: homeEnemy(9), guestEnemy: guestEnemy(9), middleHomePoints: middleHomePoints(9), middleGuestPoints: middleGuestPoints(9), middleHomeEnemyPoints: middleHomeEnemyPoints(9), middleGuestEnemyPoints: middleGuestEnemyPoints(9)},
            {id: 10, name: 'Lakers', logo: 'https://th.bing.com/th/id/OIP.QF7RBmH4CXkb5mtuXpGVCQHaFl?w=235&h=180&c=7&r=0&o=5&pid=1.7', homeMore: homeMore(10), guestMore: guestMore(10), homeEnemy: homeEnemy(10), guestEnemy: guestEnemy(10), middleHomePoints: middleHomePoints(10), middleGuestPoints: middleGuestPoints(10), middleHomeEnemyPoints: middleHomeEnemyPoints(10), middleGuestEnemyPoints: middleGuestEnemyPoints(10)},
            {id: 11, name: 'Utah', logo: 'https://th.bing.com/th/id/OIP.OZpY5jo-huPNCV2dCgTtdwHaHa?w=172&h=180&c=7&r=0&o=5&pid=1.7', homeMore: homeMore(11), guestMore: guestMore(11), homeEnemy: homeEnemy(11), guestEnemy: guestEnemy(11), middleHomePoints: middleHomePoints(11), middleGuestPoints: middleGuestPoints(11), middleHomeEnemyPoints: middleHomeEnemyPoints(11), middleGuestEnemyPoints: middleGuestEnemyPoints(11)},
            {id: 12, name: 'Minnesota', logo: 'https://th.bing.com/th/id/OIP.LxmQkK0PmVr2JFDsmfMFlwHaHa?w=185&h=185&c=7&r=0&o=5&pid=1.7', homeMore: homeMore(12), guestMore: guestMore(12), homeEnemy: homeEnemy(12), guestEnemy: guestEnemy(12), middleHomePoints: middleHomePoints(12), middleGuestPoints: middleGuestPoints(12), middleHomeEnemyPoints: middleHomeEnemyPoints(12), middleGuestEnemyPoints: middleGuestEnemyPoints(12)},
            {id: 13, name: 'Memphis', logo: 'https://th.bing.com/th/id/OIP.lJO3gqX06MfW00MrM09KgQHaG6?w=187&h=180&c=7&r=0&o=5&pid=1.7', homeMore: homeMore(13), guestMore: guestMore(13), homeEnemy: homeEnemy(13), guestEnemy: guestEnemy(13), middleHomePoints: middleHomePoints(13), middleGuestPoints: middleGuestPoints(13), middleHomeEnemyPoints: middleHomeEnemyPoints(13), middleGuestEnemyPoints: middleGuestEnemyPoints(13)},
            {id: 14, name: 'Portland', logo: 'https://th.bing.com/th/id/OIP.luIjdN8SERSIJEfzEMwU4wHaHa?w=200&h=200&c=7&r=0&o=5&pid=1.7', homeMore: homeMore(14), guestMore: guestMore(14), homeEnemy: homeEnemy(14), guestEnemy: guestEnemy(14), middleHomePoints: middleHomePoints(14), middleGuestPoints: middleGuestPoints(14), middleHomeEnemyPoints: middleHomeEnemyPoints(14), middleGuestEnemyPoints: middleGuestEnemyPoints(14)},
            {id: 15, name: 'Houston', logo: 'https://th.bing.com/th/id/OIP.CVRKrLYp1sJf_g1Gg5bzGQHaHa?w=183&h=183&c=7&r=0&o=5&pid=1.7', homeMore: homeMore(15), guestMore: guestMore(15), homeEnemy: homeEnemy(15), guestEnemy: guestEnemy(15), middleHomePoints: middleHomePoints(15), middleGuestPoints: middleGuestPoints(15), middleHomeEnemyPoints: middleHomeEnemyPoints(15), middleGuestEnemyPoints: middleGuestEnemyPoints(15)},
            {id: 16, name: 'Orlando', logo: 'https://th.bing.com/th/id/OIP.CodZ25__p1LJNH2ZlY0XLQHaHx?w=165&h=180&c=7&r=0&o=5&pid=1.7', homeMore: homeMore(16), guestMore: guestMore(16), homeEnemy: homeEnemy(16), guestEnemy: guestEnemy(16), middleHomePoints: middleHomePoints(16), middleGuestPoints: middleGuestPoints(16), middleHomeEnemyPoints: middleHomeEnemyPoints(16), middleGuestEnemyPoints: middleGuestEnemyPoints(16)},
            {id: 17, name: 'Indiana', logo: 'https://th.bing.com/th/id/OIP.letywfkjBaQO9RHDZy9EBwHaGb?w=186&h=180&c=7&r=0&o=5&pid=1.7', homeMore: homeMore(17), guestMore: guestMore(17), homeEnemy: homeEnemy(17), guestEnemy: guestEnemy(17), middleHomePoints: middleHomePoints(17), middleGuestPoints: middleGuestPoints(17), middleHomeEnemyPoints: middleHomeEnemyPoints(17), middleGuestEnemyPoints: middleGuestEnemyPoints(17)},
            {id: 18, name: 'Boston', logo: 'https://th.bing.com/th/id/OIP.eOI1VCp2UlPTJWs5tOVfLAHaFj?w=217&h=184&c=7&r=0&o=5&pid=1.7', homeMore: homeMore(18), guestMore: guestMore(18), homeEnemy: homeEnemy(18), guestEnemy: guestEnemy(18), middleHomePoints: middleHomePoints(18), middleGuestPoints: middleGuestPoints(18), middleHomeEnemyPoints: middleHomeEnemyPoints(18), middleGuestEnemyPoints: middleGuestEnemyPoints(18)},
            {id: 19, name: 'Milwaukee', logo: 'https://th.bing.com/th/id/OIP.Bvwkf5npik49VwDN4Lo-IgHaJK?w=136&h=180&c=7&r=0&o=5&pid=1.7', homeMore: homeMore(19), guestMore: guestMore(19), homeEnemy: homeEnemy(19), guestEnemy: guestEnemy(19), middleHomePoints: middleHomePoints(19), middleGuestPoints: middleGuestPoints(19), middleHomeEnemyPoints: middleHomeEnemyPoints(19), middleGuestEnemyPoints: middleGuestEnemyPoints(19)},
            {id: 20, name: 'Detroit', logo: 'https://th.bing.com/th/id/OIP.imdgY1HoFY-dxYkwIrGOcwHaGq?w=159&h=180&c=7&r=0&o=5&pid=1.7', homeMore: homeMore(20), guestMore: guestMore(20), homeEnemy: homeEnemy(20), guestEnemy: guestEnemy(20), middleHomePoints: middleHomePoints(20), middleGuestPoints: middleGuestPoints(20), middleHomeEnemyPoints: middleHomeEnemyPoints(20), middleGuestEnemyPoints: middleGuestEnemyPoints(20)},
            {id: 21, name: 'Knicks', logo: 'https://th.bing.com/th/id/OIP.a0d8uJ25sgmbJI_7M5gm1gHaHa?w=198&h=198&c=7&r=0&o=5&pid=1.7', homeMore: homeMore(21), guestMore: guestMore(21), homeEnemy: homeEnemy(21), guestEnemy: guestEnemy(21), middleHomePoints: middleHomePoints(21), middleGuestPoints: middleGuestPoints(21), middleHomeEnemyPoints: middleHomeEnemyPoints(21), middleGuestEnemyPoints: middleGuestEnemyPoints(21)},
            {id: 22, name: 'Toronto', logo: 'https://th.bing.com/th/id/OIP.EqT3nebWlcwuTi4H2_ZvzwHaHa?pid=ImgDet&rs=1', homeMore: homeMore(22), guestMore: guestMore(22), homeEnemy: homeEnemy(22), guestEnemy: guestEnemy(22), middleHomePoints: middleHomePoints(22), middleGuestPoints: middleGuestPoints(22), middleHomeEnemyPoints: middleHomeEnemyPoints(22), middleGuestEnemyPoints: middleGuestEnemyPoints(22)},
            {id: 23, name: 'Cleveland', logo: 'https://th.bing.com/th/id/OIP.imjzHpXN2MDfm0vAxQf5OgHaJQ?w=146&h=182&c=7&r=0&o=5&pid=1.7', homeMore: homeMore(23), guestMore: guestMore(23), homeEnemy: homeEnemy(23), guestEnemy: guestEnemy(23), middleHomePoints: middleHomePoints(23), middleGuestPoints: middleGuestPoints(23), middleHomeEnemyPoints: middleHomeEnemyPoints(23), middleGuestEnemyPoints: middleGuestEnemyPoints(23)},
            {id: 24, name: 'Charlotte', logo: 'https://th.bing.com/th/id/OIP.Fg_3iGQAKGBQyDAwAeqUiwHaHS?w=172&h=180&c=7&r=0&o=5&pid=1.7', homeMore: homeMore(24), guestMore: guestMore(24), homeEnemy: homeEnemy(24), guestEnemy: guestEnemy(24), middleHomePoints: middleHomePoints(24), middleGuestPoints: middleGuestPoints(24), middleHomeEnemyPoints: middleHomeEnemyPoints(24), middleGuestEnemyPoints: middleGuestEnemyPoints(24)},
            {id: 25, name: 'Miami', logo: 'https://th.bing.com/th/id/OIP.aWmXZ925s1w8BFyI8xlcwAHaFg?w=231&h=180&c=7&r=0&o=5&pid=1.7', homeMore: homeMore(25), guestMore: guestMore(25), homeEnemy: homeEnemy(25), guestEnemy: guestEnemy(25), middleHomePoints: middleHomePoints(25), middleGuestPoints: middleGuestPoints(25), middleHomeEnemyPoints: middleHomeEnemyPoints(25), middleGuestEnemyPoints: middleGuestEnemyPoints(25)},
            {id: 26, name: 'Chicago', logo: 'https://th.bing.com/th?q=Chicago+Bulls+Logo&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=de-DE&cc=DE&setlang=ru&adlt=moderate&t=1&mw=247', homeMore: homeMore(26), guestMore: guestMore(26), homeEnemy: homeEnemy(26), guestEnemy: guestEnemy(26), middleHomePoints: middleHomePoints(26), middleGuestPoints: middleGuestPoints(26), middleHomeEnemyPoints: middleHomeEnemyPoints(26), middleGuestEnemyPoints: middleGuestEnemyPoints(26)},
            {id: 27, name: 'Philadelphia', logo: 'https://th.bing.com/th/id/OIP.3-woibFrjOGMJatUvoIKtwHaHa?w=193&h=193&c=7&r=0&o=5&pid=1.7', homeMore: homeMore(27), guestMore: guestMore(27), homeEnemy: homeEnemy(27), guestEnemy: guestEnemy(27), middleHomePoints: middleHomePoints(27), middleGuestPoints: middleGuestPoints(27), middleHomeEnemyPoints: middleHomeEnemyPoints(27), middleGuestEnemyPoints: middleGuestEnemyPoints(27)},
            {id: 28, name: 'Brooklyn', logo: 'https://th.bing.com/th/id/OIP.SiZtguBWXCvto4EW_uFx7AHaHa?w=185&h=185&c=7&r=0&o=5&pid=1.7', homeMore: homeMore(28), guestMore: guestMore(28), homeEnemy: homeEnemy(28), guestEnemy: guestEnemy(28), middleHomePoints: middleHomePoints(28), middleGuestPoints: middleGuestPoints(28), middleHomeEnemyPoints: middleHomeEnemyPoints(28), middleGuestEnemyPoints: middleGuestEnemyPoints(28)},
            {id: 29, name: 'Atlanta', logo: 'https://th.bing.com/th/id/OIP.juJ3FHXry1oE1Kt4fJj1XQHaHa?w=176&h=180&c=7&r=0&o=5&pid=1.7', homeMore: homeMore(29), guestMore: guestMore(29), homeEnemy: homeEnemy(29), guestEnemy: guestEnemy(29), middleHomePoints: middleHomePoints(29), middleGuestPoints: middleGuestPoints(29), middleHomeEnemyPoints: middleHomeEnemyPoints(29), middleGuestEnemyPoints: middleGuestEnemyPoints(29)},
            {id: 30, name: 'Washington', logo: 'https://th.bing.com/th/id/OIP.F7taCj5V5nEClt_W1hPMWQHaHa?w=168&h=180&c=7&r=0&o=5&pid=1.7', homeMore: homeMore(30), guestMore: guestMore(30), homeEnemy: homeEnemy(30), guestEnemy: guestEnemy(30), middleHomePoints: middleHomePoints(30), middleGuestPoints: middleGuestPoints(30), middleHomeEnemyPoints: middleHomeEnemyPoints(30), middleGuestEnemyPoints: middleGuestEnemyPoints(30)},
          ],
          statistic: statistic,
    }
      
  },
  getState () {
    return this._state;
  },
  subscribe (observer) {
    this._renderEntireTree = observer;
  },

  renderEntireTree () {
    console.log("State")
  },

  dispatch (action) {
    this._state.profilePage = profileReducer(this._state.profilePage,action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);

    this._renderEntireTree(this._state);
  },
  
}


  function homeMore(id) {
    let teamMatches = matches.filter(item => item.homeTeamId === id);
    let teamMatchesMore = teamMatches.filter(item => item.homeResult > item.homeTotal);
    let procentHomeMore = Math.round((teamMatchesMore.length/teamMatches.length)*100);
    
    return procentHomeMore;
  }

  function guestMore(id) {
    let teamMatches = matches.filter(item => item.guestTeamId === id);
    let teamMatchesMore = teamMatches.filter(item => item.guestResult > item.homeTotal);
    let procentGuestMore = Math.round((teamMatchesMore.length/teamMatches.length)*100);
  
    return procentGuestMore;
  }

  function homeEnemy(id) {
    let teamMatches = matches.filter(item => item.homeTeamId === id);
    let teamMatchesMore = teamMatches.filter(item => item.guestResult > item.guestTotal);
    let procentHomeEnemy = Math.round((teamMatchesMore.length/teamMatches.length)*100);
    
    return procentHomeEnemy;
  }

  function guestEnemy(id) {
    let teamMatches = matches.filter(item => item.guestTeamId === id);
    let teamMatchesMore = teamMatches.filter(item => item.homeResult > item.homeTotal);
    let procentGuestEnemy = Math.round((teamMatchesMore.length/teamMatches.length)*100);
    
    return procentGuestEnemy;
  }

  function middleHomePoints(id) {
    let homePoints = 0
    let teamMatches = matches.filter(item => item.homeTeamId === id);
    teamMatches.forEach(item => homePoints+=item.homeResult);
    let middleHomePoints = (homePoints/teamMatches.length).toFixed(2);

    return middleHomePoints;
  }

  function middleGuestPoints(id) {
    let guestPoints = 0
    let teamMatches = matches.filter(item => item.guestTeamId === id);
    teamMatches.forEach(item => guestPoints+=item.guestResult);
    let middleGuestPoints = (guestPoints/teamMatches.length).toFixed(2);

    return middleGuestPoints;
  }

  function middleHomeEnemyPoints(id) {
    let homeEnemyPoints = 0
    let teamMatches = matches.filter(item => item.homeTeamId === id);
    teamMatches.forEach(item => homeEnemyPoints+=item.guestResult);
    let middleHomeEnemyPoints = (homeEnemyPoints/teamMatches.length).toFixed(2);

    return middleHomeEnemyPoints;
  }

  function middleGuestEnemyPoints(id) {
    let guestEnemyPoints = 0
    let teamMatches = matches.filter(item => item.guestTeamId === id);
    teamMatches.forEach(item => guestEnemyPoints+=item.homeResult);
    let middleGuestEnemyPoints = (guestEnemyPoints/teamMatches.length).toFixed(2);

    return middleGuestEnemyPoints;
  }








   
  function matchesFormula() {
    let homeMatches = matches.filter(item => (item.homeTeamMoreProcent>55 && item.homeTeamMoreProcent<65));
    let homeMatchesMore = homeMatches.filter(item => item.homeResult > item.homeTotal);
    let procentHomeMore = Math.round((homeMatchesMore.length/homeMatches.length)*100);
    // console.log(homeMatches,"homeMatches")
    // console.log(homeMatchesMore,"homeMatchesMore")
    console.log(procentHomeMore,"procentHomeMore")

    let guestMatches = matches.filter(item => (item.guestTeamMoreProcent>65 && item.guestTeamMoreProcent<70));
    let guestMatchesMore = guestMatches.filter(item => item.guestResult > item.guestTotal);
    let procentGuestMore = Math.round((guestMatchesMore.length/guestMatches.length)*100);
    // console.log(guestMatches,"guestMatches")
    // console.log(guestMatchesMore,"guestMatchesMore")
    console.log(procentGuestMore,"procentGuestMore")

    let sumProcentHomeMatches = matches.filter(item => item.homeTeamMoreProcent>=0);

    // console.log(sumProcentHomeMatches,"sumProcentHomeMatches")

    let middleProcentHomeMatches= matches.filter(item => 
       (item.middleProcentHomeMore>65 && item.middleProcentHomeMore<75));
    let middleProcentHomeMoreMatches = middleProcentHomeMatches.filter(item => item.guestResult > item.guestTotal);
    let procentMiddleHomeMore = Math.round((middleProcentHomeMoreMatches.length/middleProcentHomeMatches.length)*100);
    // console.log(middleProcentHomeMatches,"middleProcentHomeMatches")
    // console.log(middleProcentHomeMoreMatches,"middleProcentHomeMoreMatches")
    console.log(procentMiddleHomeMore,"procentMiddleHomeMore")

    let middleProcentGuestMatches= matches.filter(item => 
       (item.middleProcentGuestMore>65 && item.middleProcentGuestMore<70));
    let middleProcentGuestMoreMatches = middleProcentGuestMatches.filter(item => item.guestResult > item.guestTotal);
    let procentMiddleGuestMore = Math.round((middleProcentGuestMoreMatches.length/middleProcentGuestMatches.length)*100);
    // console.log(middleProcentGuestMatches,"middleProcentGuestMatches")
    // console.log(middleProcentGuestMoreMatches,"middleProcentGuestMoreMatches")
    console.log(procentMiddleGuestMore,"procentMiddleGuestMore")

    let middleHomePoints= matches.filter(item => 
        (item.middleTotalHome));
     let middleHomePointsMore = middleHomePoints.filter(item => (item.homeResult > item.homeTotal && item.middleTotalHome>item.homeTotal));
    //  let procentMiddleGuestMore = Math.round((middleProcentGuestMoreMatches.length/middleProcentGuestMatches.length)*100);
     console.log(middleHomePoints,"middleHomePoints")
     console.log(middleHomePointsMore,"middleHomePointsMore")
    //  console.log(procentMiddleGuestMore,"procentMiddleGuestMore")
    
    return procentHomeMore;
  }

  matchesFormula();

  export default store;
