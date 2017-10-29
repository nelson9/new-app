import { Component, OnInit } from '@angular/core';
import { LevelTest } from './level-test'
import { Level } from './level'
import { Question } from './question'


@Component({
    selector: "level-test",
    templateUrl: './level-test.component.html',
    styleUrls: ['./level-test.component.scss']
})
export class LevelTestComponent implements OnInit {
    title = 'app';
    questions: Array<Question>;
    currentQuestion: Question;
    score: number;
    percentComplete: number;
    questionNumber: number;
    testOver: boolean;

    ngOnInit() {

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

        this.questions = new Array<Question>();
        
        this.questions.push(question1)
        this.questions.push(question2)
        this.questions.push(question3)
        this.questions.push(question4)
    
        this.currentQuestion = this.questions[0];
        this.score = 0;
        this.percentComplete = 0;
        this.questionNumber = 1;
        this.testOver = false;
    }

    submitAnswer(answer) {
        if(answer === this.currentQuestion.answer){
            this.score = this.score +1;
        }

        let index = this.questions.indexOf(this.currentQuestion) + 1;
        
       

        if (index < this.questions.length) {
            this.questionNumber = this.questionNumber +1;
            this.currentQuestion = this.questions[index];
            this.percentComplete = (index/this.questions.length) * 100;
        }
        else{
            this.testOver = true;
        }



    }


}


