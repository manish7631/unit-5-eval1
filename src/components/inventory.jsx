
import { useState } from 'react';

export const Inventory = () => {
    const [xyz, setInv] = useState({
        Scores :76,
        Wickets:2,
        Balls:50
      })
    
      const Score = xyz.Scores
      const Wicket = xyz.Wickets
      const Balls = xyz.Balls
    var overs =  (Balls/6).toFixed(1)
    console.log(overs)
    
      const Change = (value, title) => {
        if(title === "Score"){
          setInv(prevState => {
            return {...prevState, Scores:prevState.Scores + value}
          })
        }
         else if(title === "Wicket"){
             setInv(prevState => {
               return {...prevState, Wickets:prevState.Wickets + value}
             })
           }
           else  if(title === "Ball"){
             setInv(prevState => {
               return {...prevState, Balls:prevState.Balls + value}
             })
           }
      }
      

        if(Score > 100){
            return  <h1>India won the match</h1>
        }

        if(Wicket > 12){
            return <h>All Out</h>
        }

        if(overs > 50){
            return <h1> All Over ends</h1>
        }
    
    
    
      return (
        <div className="App">
        <h3>India:</h3>
        <div className="banner">
          <div>
            Score:{Score}
            <h1 className="scoreCount">
              {
                // show "score" here
              
           
              }
            </h1>
          </div>
          <div>
            Wicket:{Wicket}
            <h1 className="wicketCount">
              {
                // show wicket here
               
              }
            </h1>
          </div>
    
          <div>
            Over:{overs}
            <h1 className="overCount">
              {
                // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
                // if 1 more ball is thrown then over is now 5.0
                // you have to write logic to form this string from current ball number.
              }
            </h1>
          </div>
        </div>
    
        <div className="addScore">
          Add Score
          {/* these buttons should add the respective amount in the score */}
          <button className="addScore1" onClick={() => {
            Change(1, "Score")
            console.log(Score)
          }}>Add 1</button>
          <button className="addScore4" onClick={() => {
            Change(4, "Score")
          }}>Add 4</button>
          <button className="addScore6" onClick={() => {
            Change(6, "Score")
          }}>Add 6</button>
        </div>
    
        <div className="addWicket">
          Add Wicket
          {/* Increase the count of wicket */}
          <button onClick={() => {
            Change(1, "Wicket")
            console.log(Wicket)
          }}>Add 1 wicket</button>
        </div>
    
        <div className="addBall">
          Add ball
          {/* Increase the total number of balls thrown here. */}
          <button onClick={() => {
            Change(1, "Ball")
          }}>Add 1</button>
        </div>
    
        {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
      </div>
      );
    }


  