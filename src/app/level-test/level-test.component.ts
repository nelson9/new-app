import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Level } from './level'
import { Question } from './question'
import { QuestionSet } from './questionSet'

@Component({
    selector: "level-test",
    templateUrl: './level-test.component.html',
    styleUrls: ['./level-test.component.scss']
})
export class LevelTestComponent implements OnInit {
   
    questionsSet: QuestionSet;

    currentQuestion: Question;
    score: number;
    percentComplete: number;
    questionNumber: number;
    testOver: boolean;    
    level : Level;
    totalQuestions: number;
    continueNextLevel: boolean;
    
    ngOnInit() {
       
        this.questionsSet = this.getA1Questions();
        this.currentQuestion = this.questionsSet.questions[0];
        this.score = 0;
        this.percentComplete = 0;
        this.questionNumber = 1;
        this.testOver = false;
        this.level = Level.A1;
        this.totalQuestions = this.questionsSet.questions.length;    
        this.continueNextLevel = false;    
    }

    submitAnswer(answer) {
        if(answer.answer == this.currentQuestion.answer){
            this.score = this.score +1;
            if(this.score > 2) {
                if(this.level === Level.A1){
                    this.continueNextLevel = true;
                    this.level = Level.A2
                }   
                if(this.level === Level.A2){
                    this.continueNextLevel = true;
                    this.level = Level.B1
                }            
            }
        }

        let index = this.questionsSet.questions.indexOf(this.currentQuestion) + 1;              

        if (index < this.questionsSet.questions.length) {
            this.questionNumber = this.questionNumber +1;
            this.currentQuestion = this.questionsSet.questions[index];
            this.percentComplete = (index/this.questionsSet.questions.length) * 100;
        }
        else{

            if(this.continueNextLevel === true && this.level != Level.B1){
                this.questionsSet = this.getA2Questions();
                this.percentComplete = 100;
            }
            else{
                this.testOver = true;
            }
            
           
        }
        console.log(this.score);
    }

    getLevelName(): string{
        return Level[this.level];
    }

    getA1Questions(): QuestionSet {
        let question1 = new Question();
        let question2 = new Question();
        let question3 = new Question();
        let question4 = new Question();

        question1.answer = "hola";
        question1.question = "How do you say hello?"
        question1.options = new Array<string>();
        question1.options.push("hola");
        question1.options.push("adios");
        question1.options.push("gracias");

        question2.answer = "adios";
        question2.question = "How do you say goodbye?"
        question2.options = new Array<string>();
        question2.options.push("hola");
        question2.options.push("adios");
        question2.options.push("gracias");

        question3.answer = "hola";
        question3.question = "How do you say hello?"
        question3.options = new Array<string>();
        question3.options.push("hola");
        question3.options.push("adios");
        question3.options.push("gracias");

        question4.answer = "adios";
        question4.question = "How do you say goodbye?"
        question4.options = new Array<string>();
        question4.options.push("hola");
        question4.options.push("adios");
        question4.options.push("gracias");

        let questions = new Array<Question>();
        
        questions.push(question1)
        questions.push(question2)
        questions.push(question3)
        questions.push(question4)

        let questionSet = new QuestionSet();
        questionSet.level = Level.A1;
        questionSet.questions = questions;

        return questionSet;
    }

    getA2Questions(): QuestionSet {
        let question1 = new Question();
        let question2 = new Question();
        let question3 = new Question();
        let question4 = new Question();

        question1.answer = "hola";
        question1.question = "How do you say hello a2?"
        question1.options = new Array<string>();
        question1.options.push("hola");
        question1.options.push("adios");
        question1.options.push("gracias");

        question2.answer = "adios";
        question2.question = "How do you say goodbye?"
        question2.options = new Array<string>();
        question2.options.push("hola");
        question2.options.push("adios");
        question2.options.push("gracias");

        question3.answer = "hola";
        question3.question = "How do you say hello?"
        question3.options = new Array<string>();
        question3.options.push("hola");
        question3.options.push("adios");
        question3.options.push("gracias");

        question4.answer = "adios";
        question4.question = "How do you say goodbye?"
        question4.options = new Array<string>();
        question4.options.push("hola");
        question4.options.push("adios");
        question4.options.push("gracias");

        let questions = new Array<Question>();
        
        questions.push(question1)
        questions.push(question2)
        questions.push(question3)
        questions.push(question4)

        let questionSet = new QuestionSet();
        questionSet.level = Level.A2;
        questionSet.questions = questions;

        return questionSet;
    }
}


