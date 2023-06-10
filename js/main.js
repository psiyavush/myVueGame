    let app = new Vue({
        el: '.main',
        data: {
          showMain: true,
          showQuestions: false,
          showSocial: false,
          showAchivments: false,
          showResult: false,
          showRules: false,
          number: 0,
          score: {
            'castle': 0,
            'rampart': 0,
            'tower': 0,
            'fortress': 0,
            'stronghold': 0,
            'inferno': 0,
            'necropolis':0,
            'dungeon': 0,
            'conflux':0
          },
          totalGame: localStorage.getItem('sc2TotalGame') ? JSON.parse(localStorage.getItem('sc2TotalGame')) : {
            'castle': 0,
            'rampart': 0,
            'tower': 0,
            'fortress': 0,
            'stronghold': 0,
            'inferno': 0,
            'necropolis':0,
            'dungeon': 0,
            'conflux':0,
          },
          totalGames: localStorage.getItem('sc2TotalGames') ? localStorage.getItem('sc2TotalGames') : 0,
          questions: questions,
          results: results,
          resultsTown: 'conflux'
        },
        methods: {
          goToMain(){
            this.showMain = true
            this.showSocial = false
            this.showAchivments = false
            this.showQuestions = false
            this.showResult = false
            this.showRules = false
          },
          goToSocial() {
            this.showMain = false
            this.showSocial = true
            this.showAchivments = false
            this.showQuestions = false
            this.showResult = false
            this.showRules = false
          },
          goToRules(){
            this.showMain = false
            this.showSocial = false
            this.showAchivments = false
            this.showQuestions = false
            this.showResult = false
            this.showRules = true
          },
          goToAchivments() {
            if(this.totalGames > 0) {
              this.showMain = false
              this.showSocial = false
              this.showAchivments = true
              this.showQuestions = false
              this.showResult = false
              this.showRules = false
            } else {
              this.goToQuestions()
            }
          },
          goToQuestions() {
            this.score = {
              'castle': 0,
              'rampart': 0,
              'tower': 0,
              'fortress': 0,
              'stronghold': 0,
              'inferno': 0,
              'necropolis':0,
              'dungeon': 0,
              'conflux':0,
            }
            this.showMain = false
            this.showSocial = false
            this.showAchivments = false
            this.showQuestions = true
            this.showResult = false
            this.showRules = false
          },
          goToResult(town) {
            this.showMain = false
            this.showSocial = false
            this.showAchivments = false
            this.showQuestions = false
            this.showRules = false
            this.showResult = true
            this.resultsTown = town
          },
          nextQuestions(answer) {
            if(this.number == 10) {
              this.number = 0
              this.endGame();
            } else {
              this.number++
            }
            eval(answer)
          },
          endGame() {
            this.totalGames++;
            localStorage.setItem('sc2TotalGames', this.totalGames)
            if (this.score.castle > this.score.rampart && this.score.castle > this.score.tower && 
            this.score.castle > this.score.fortress && this.score.castle > this.score.stronghold &&
            this.score.castle > this.score.inferno && this.score.castle > this.score.necropolis &&
            this.score.castle > this.score.dungeon && this.score.castle > this.score.conflux) {
              this.goToResult('castle')
              this.totalGame.castle++
            }
            else if (this.score.rampart > this.score.castle && this.score.rampart > this.score.tower && 
            this.score.rampart > this.score.fortress && this.score.rampart > this.score.stronghold &&
            this.score.rampart > this.score.inferno && this.score.rampart > this.score.necropolis &&
            this.score.rampart > this.score.dungeon && this.score.rampart > this.score.conflux) {
              this.goToResult('rampart')
              this.totalGame.rampart++
            }
            else if (this.score.tower > this.score.castle && this.score.tower > this.score.rampart && 
            this.score.tower > this.score.fortress && this.score.tower > this.score.stronghold &&
            this.score.tower > this.score.inferno && this.score.tower > this.score.necropolis &&
            this.score.tower > this.score.dungeon && this.score.tower > this.score.conflux) {
              this.goToResult('tower')
              this.totalGame.tower++
            }
            else if (this.score.fortress > this.score.castle && this.score.fortress > this.score.rampart && 
            this.score.fortress > this.score.tower && this.score.fortress > this.score.stronghold &&
            this.score.fortress > this.score.inferno && this.score.fortress > this.score.necropolis &&
            this.score.fortress > this.score.dungeon && this.score.fortress > this.score.conflux) {
              this.goToResult('fortress')
              this.totalGame.fortress++
            }
            else if (this.score.stronghold > this.score.castle && this.score.stronghold > this.score.rampart && 
            this.score.stronghold > this.score.tower && this.score.stronghold > this.score.fortress &&
            this.score.stronghold > this.score.inferno && this.score.stronghold > this.score.necropolis &&
            this.score.stronghold > this.score.dungeon && this.score.stronghold > this.score.conflux) {
              this.goToResult('stronghold')
              this.totalGame.stronghold++
            }
            else if (this.score.inferno > this.score.castle && this.score.inferno > this.score.rampart && 
            this.score.inferno > this.score.tower && this.score.inferno > this.score.fortress &&
            this.score.inferno > this.score.stronghold && this.score.inferno > this.score.necropolis &&
            this.score.inferno > this.score.dungeon && this.score.inferno > this.score.conflux) {
              this.goToResult('inferno')
              this.totalGame.inferno++
            }
            else if (this.score.necropolis > this.score.castle && this.score.necropolis > this.score.rampart && 
            this.score.necropolis > this.score.tower && this.score.necropolis > this.score.fortress &&
            this.score.necropolis > this.score.stronghold && this.score.necropolis > this.score.inferno &&
            this.score.necropolis > this.score.dungeon && this.score.necropolis > this.score.conflux) {
              this.goToResult('necropolis')
              this.totalGame.necropolis++
            }
            else if (this.score.dungeon > this.score.castle && this.score.dungeon > this.score.rampart && 
            this.score.dungeon > this.score.tower && this.score.dungeon > this.score.fortress &&
            this.score.dungeon > this.score.stronghold && this.score.dungeon > this.score.inferno &&
            this.score.dungeon > this.score.necropolis && this.score.dungeon > this.score.conflux) {
              this.goToResult('dungeon')
              this.totalGame.dungeon++
            }
            else {
              this.goToResult('conflux')
              this.totalGame.conflux++
            }
            localStorage.setItem('sc2TotalGame', JSON.stringify(this.totalGame))
          }
        },
        computed: {
          totalScore() {
            let score=0
            for(let i in this.totalGame) {
              score+=(this.totalGame[i]*results[i].point)
            }
            return score
          },
          openTowns() {
            let count=0
            for(let i in this.totalGame) {
              if(this.totalGame[i]>0) count++
            }
            return count
          },
          favoriteTown() {
            let max='castle'
            for(let i in this.totalGame) {
              if(this.totalGame[i]>this.totalGame[max]) {
                max=i
              }
            }
            return results[max].name
          },
          showResultTown() {
            return {
              'castle': this.totalGame.castle > 0 ? true : false,
              'rampart': this.totalGame.rampart > 0 ? true : false,
              'tower': this.totalGame.tower > 0 ? true : false,
              'fortress': this.totalGame.fortress > 0 ? true : false,
              'stronghold': this.totalGame.stronghold > 0 ? true : false,
              'inferno': this.totalGame.inferno > 0 ? true : false,
              'necropolis': this.totalGame.necropolis > 0 ? true : false,
              'dungeon': this.totalGame.dungeon > 0 ? true : false,
              'conflux': this.totalGame.conflux > 0 ? true : false,
            }
          }
        }
      })
  
      let audio = new Audio('https://goroskoptop.ru/wp-content/soundtrack.mp3');
      let audio_btn = document.querySelector('.btn__sound');
      let audio_icon = document.querySelector('.btn__sound i');
  
      audio.muted = true;
      audio_btn.addEventListener('click', function(){
        if(audio.muted){
          audio.muted = false;
          audio.play();
          audio.loop = true;
          audio.volume = 0.2;
          audio_icon.classList.add('fa-volume-up');
          audio_icon.classList.remove('fa-volume-off');
        } else if(!audio.muted){
          audio.muted = true;
          audio_icon.classList.add('fa-volume-off');
          audio_icon.classList.remove('fa-volume-up');
        }
      })
