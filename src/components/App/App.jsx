import React from 'react';
import ChallengeSection from '../ChallengeSection/ChallengeSection';
import Footer from '../Footer/Footer';
import Landing from '../Landing/Landing';
import Nav from '../Nav/Nav';
import './App.css'
const TotalTime = 60;
const Url = "http://metaphorpsum.com/paragraphs/2/4";
const defaultState = {
    selectedParagraph:"",
    timerStarted:false,
    timeRemaining:TotalTime,
    words:0,
    characters:0,
    testInfo:[],
    wpm:0,
}
class App extends React.Component{
    state = defaultState;


fetchNewParagraph= ()=>{
    fetch(Url).then(response=>response.text())
    .then(data=>{
this.setState({selectedParagraph:data});
const selectedParagraphArray = data.split("");
//this.state.selectedParagraph.split("");
const testInfo = selectedParagraphArray.map(selectedLetter => {
 return {
     testLetter:selectedLetter,
     status:"Not attempted"
 }
});
this.setState({...defaultState,testInfo,selectedParagraph:data})
})

}


    componentDidMount(){
 this.fetchNewParagraph();
       }



    startTimer=()=>{
        this.setState({timerStarted:true});
        const timer = setInterval(()=>{

            if(this.state.timeRemaining>0)
            {
                const timeSpent = TotalTime - this.state.timeRemaining;
                const wpm=timeSpent>0?(this.state.words/timeSpent)*TotalTime:0;
                this.setState(
                    {
                        timeRemaining:this.state.timeRemaining - 1,
                        wpm:parseInt(wpm)
                    })

            }
            else
            {
                clearInterval(timer)
            }
       

        },1000)
    }

    startAgain=() =>this.fetchNewParagraph();

    handleUserInput = (inputValue)=>{
        if(!this.state.startTimer) this.startTimer()
        const characters = inputValue.length;
        const words = inputValue.split("").length;
        const index = characters - 1;
        if(index<0)
        {
            this.setState({
                testInfo:[
                    {
                        testLetter:this.state.testInfo[0].testLetter,
                        status:"Not attempted"
                    },
                    ...this.state.testInfo.slice(1),
                    characters,
                    words

                ]
            })
            return;
        }

        if(index>this.state.selectedParagraph.length){
            this.setState({
                characters,words
            })
            return;
            
        }

        const testInfo = this.state.testInfo;

        if(!(index===this.state.selectedParagraph.length-1)){
            testInfo[index+1].status = "Not attempted"
        }

        const isCorrect = inputValue[index] ===  testInfo[index].testLetter;
        testInfo[index].status = isCorrect?"correct":"incorrect"
        this.setState({
            testInfo,
            words,
            characters
        })
    }


    render()
    {
        console.log(this.state.testInfo)
        return(
        <div className="app">
            <Nav/>
            <Landing/>
            <ChallengeSection 
            selectedParagraph = {this.state.selectedParagraph} 
            words={this.state.words} 
            characters ={this.state.characters} 
            wpm = {this.state.wpm} 
            timeRemaining={this.state.timeRemaining} 
            timerStarted={this.state.timerStarted}
            testInfo ={this.state.testInfo}
            onInputChange = {this.handleUserInput}
            startAgain={this.startAgain()}
            />
            <Footer/>
        </div>
        );
    }
}


export default App