(this.webpackJsonpflashtype=this.webpackJsonpflashtype||[]).push([[0],[,,,,,,,,,,,,,,,function(t,e,a){},,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(1),s=a.n(n),r=a(4),c=a.n(r),i=a(8),o=a(3),l=a(5),d=a(6),h=a(10),j=a(9),m=(a(15),a(0)),p=function(t){var e=t.cardName,a=t.cardValue;return Object(m.jsxs)("div",{className:"details-card-container",children:[Object(m.jsx)("div",{className:"card-name",children:e}),Object(m.jsx)("div",{className:"card-value",children:a})]})},u=(a(17),function(t){var e=t.individualLetterInfo,a={correct:"test-letter-correct",incorrect:"test-letter-incorrect",notAttempted:"test-letter-not-attempted"}[e.status];return console.log("test-letter ".concat(a)),Object(m.jsx)("span",{className:"test-letter ".concat(a),children:e.testLetter})}),g=(a(18),function(t){t.selectedParagraph;var e=t.timerStarted,a=t.timeRemaining,n=t.testInfo,s=t.onInputChange;return console.log("typing info",n),Object(m.jsxs)("div",{className:"typing-challenge",children:[Object(m.jsxs)("div",{className:"timer-container",children:[Object(m.jsxs)("p",{className:"timer",children:["00:",a>10?a:"0".concat(a)]}),Object(m.jsx)("p",{className:"timer-info",children:!e&&"Start typing to type"})]}),Object(m.jsxs)("div",{className:"textarea-container",children:[Object(m.jsx)("div",{className:"textarea-left",children:Object(m.jsx)("div",{className:"textarea test-paragraph",children:n.map((function(t,e){return Object(m.jsx)(u,{individualLetterInfo:t},e)}))})}),Object(m.jsx)("div",{className:"textarea-right",children:Object(m.jsx)("textarea",{onChange:function(t){return s(t.target.value)},className:"textarea",placeholder:"start typing here"})})]})]})}),f=(a(19),function(t){var e=t.selectedParagraph,a=t.timerStarted,n=t.timeRemaining,s=t.words,r=t.characters,c=t.wpm,i=t.testInfo,o=t.onInputChange;return Object(m.jsxs)("div",{className:"typing-challenge-container",children:[Object(m.jsxs)("div",{className:"details-container",children:[Object(m.jsx)(p,{cardName:"words",cardValue:s}),Object(m.jsx)(p,{cardName:"characters",cardValue:r}),Object(m.jsx)(p,{cardName:"speed",cardValue:c})]}),Object(m.jsx)("div",{className:"typewriter-container",children:Object(m.jsx)(g,{testInfo:i,timerStarted:a,timeRemaining:n,selectedParagraph:e,onInputChange:o})})]})}),b=(a(20),function(t){var e=t.words,a=t.characters,n=t.wpm,s=t.startAgain;return Object(m.jsxs)("div",{className:"try-again-container",children:[Object(m.jsx)("h1",{children:"Test Results"}),Object(m.jsxs)("div",{className:"result-container",children:[Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Characters"})," ",a]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Words"})," ",e]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Speed"})," ",n]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{onClick:function(){return s()},className:"end-buttons start-again-btn",children:"Re-try"}),Object(m.jsx)("button",{onClick:function(){window.open("https://www.facebook.com/sharer/sharer.php?u=","facebook-share-dialog","width=800,height=600")},className:"end-buttons share-btn",children:"Share"}),Object(m.jsx)("button",{onClick:function(){window.open("https://twitter.com/intent/tweet?text=Check%20this%20out%20","Twitter","width=800,height=600")},className:"end-buttons tweet-btn",children:"Tweet"})]})]})}),x=(a(21),function(t){var e=t.selectedParagraph,a=t.timerStarted,n=t.timeRemaining,s=t.words,r=t.characters,c=t.wpm,i=t.testInfo,o=t.onInputChange,l=t.startAgain;return Object(m.jsx)("div",{className:"test-container",children:n>0?Object(m.jsx)("div",{"data-aos":"fade-up",className:"typing-challenge-container",children:Object(m.jsx)(f,{selectedParagraph:e,timerStarted:a,timeRemaining:n,words:s,characters:r,wpm:c,testInfo:i,onInputChange:o})}):Object(m.jsx)("div",{className:"try-again-container",children:Object(m.jsx)(b,{words:s,characters:r,wpm:c,startAgain:l})})})}),O=(a(22),function(t){var e=t.selectedParagraph,a=t.timerStarted,n=t.timeRemaining,s=t.words,r=t.characters,c=t.wpm,i=t.testInfo,o=t.onInputChange,l=t.startAgain;return Object(m.jsxs)("div",{className:"challenge-section-container",children:[Object(m.jsx)("h1",{"data-aos":"fade-down",className:"challenge-section-header",children:"Take a speed test now!"}),Object(m.jsx)(x,{testInfo:i,selectedParagraph:e,timerStarted:a,timeRemaining:n,words:s,characters:r,wpm:c,onInputChange:o,startAgain:l})]})}),v=(a(23),function(){return Object(m.jsx)("div",{className:"footer-container",children:Object(m.jsx)("a",{href:"www.google.com",className:"footer-link",targer:"_blank",rel:"noreferrer",children:"Watch me code"})})}),w=(a(24),a.p+"static/media/hero.96e141d3.png"),N=a(7),I=a.n(N),y=function(){return Object(m.jsxs)("div",{className:"landing-container",children:[Object(m.jsxs)("div",{"data-aos":"fade-right",className:"landing-left",children:[Object(m.jsx)("h1",{className:"landing-header",children:"Can you type..."}),Object(m.jsx)("div",{className:"typewriter-container",children:Object(m.jsx)(I.a,{options:{strings:["Fast?","Correct?","Quick?"],autoStart:!0,loop:!0}})})]}),Object(m.jsx)("div",{className:"landing-right",children:Object(m.jsx)("img",{"data-aos":"fade-left",className:"flash-image",src:w,alt:"flash"})})]})},S=a.p+"static/media/logo.904ac8fd.png",C=(a(25),function(){return Object(m.jsxs)("div",{className:"nav-container",children:[Object(m.jsxs)("div",{className:"nav-left",children:[Object(m.jsx)("img",{className:"flash-logo",src:S,alt:"logo"}),Object(m.jsx)("p",{className:"flash-logo-text",children:"FlashType"})]}),Object(m.jsx)("div",{className:"nav-right",children:Object(m.jsx)("a",{target:"_blank",href:"www.theleanprogrammer.com/aam",rel:"noreferrer",className:"nav-aam-link",children:"AAM"})})]})}),P=(a(26),"http://metaphorpsum.com/paragraphs/2/4"),k={selectedParagraph:"",timerStarted:!1,timeRemaining:60,words:0,characters:0,testInfo:[],wpm:0},R=function(t){Object(h.a)(a,t);var e=Object(j.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state=k,t.fetchNewParagraph=function(){fetch(P).then((function(t){return t.text()})).then((function(e){t.setState({selectedParagraph:e});var a=e.split("").map((function(t){return{testLetter:t,status:"Not attempted"}}));t.setState(Object(o.a)(Object(o.a)({},k),{},{testInfo:a,selectedParagraph:e}))}))},t.startTimer=function(){t.setState({timerStarted:!0});var e=setInterval((function(){if(t.state.timeRemaining>0){var a=60-t.state.timeRemaining,n=a>0?t.state.words/a*60:0;t.setState({timeRemaining:t.state.timeRemaining-1,wpm:parseInt(n)})}else clearInterval(e)}),1e3)},t.startAgain=function(){return t.fetchNewParagraph()},t.handleUserInput=function(e){t.state.startTimer||t.startTimer();var a=e.length,n=e.split("").length,s=a-1;if(s<0)t.setState({testInfo:[{testLetter:t.state.testInfo[0].testLetter,status:"Not attempted"}].concat(Object(i.a)(t.state.testInfo.slice(1)),[a,n])});else if(s>t.state.selectedParagraph.length)t.setState({characters:a,words:n});else{var r=t.state.testInfo;s!==t.state.selectedParagraph.length-1&&(r[s+1].status="Not attempted");var c=e[s]===r[s].testLetter;r[s].status=c?"correct":"incorrect",t.setState({testInfo:r,words:n,characters:a})}},t}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.fetchNewParagraph()}},{key:"render",value:function(){return console.log(this.state.testInfo),Object(m.jsxs)("div",{className:"app",children:[Object(m.jsx)(C,{}),Object(m.jsx)(y,{}),Object(m.jsx)(O,{selectedParagraph:this.state.selectedParagraph,words:this.state.words,characters:this.state.characters,wpm:this.state.wpm,timeRemaining:this.state.timeRemaining,timerStarted:this.state.timerStarted,testInfo:this.state.testInfo,onInputChange:this.handleUserInput,startAgain:this.startAgain()}),Object(m.jsx)(v,{})]})}}]),a}(s.a.Component);c.a.render(Object(m.jsx)(R,{}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.9b6a343b.chunk.js.map