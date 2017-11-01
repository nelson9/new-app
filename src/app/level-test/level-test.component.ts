import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Level } from './level'
import { Question } from './question'
import { QuestionSet } from './questionSet'

@Component({
    selector: "level-test",
    templateUrl: './level-test.component.html',
    styleUrls: ['./level-test.component.scss']
})
export class LevelTestComponent implements OnInit {

    questionSetList: Array<QuestionSet>;
    currentQuestionsSet: QuestionSet;
    currentQuestion: Question;
    score: number;
    percentComplete: number;   
    testOver: boolean;
    level: Level;
    totalQuestions: number;
    continueNextLevel: boolean;

    ngOnInit() {

        this.questionSetList = new Array<QuestionSet>();


        let questionsSetA1 = this.getA1Questions();
        let questionsSetA2 = this.getA2Questions();
        this.questionSetList.push(questionsSetA1);
        this.questionSetList.push(questionsSetA2);


        this.currentQuestionsSet = this.questionSetList[0];
        this.score = 0;
        this.percentComplete = 0;
        
        this.testOver = false;
        this.level = Level.A1;
        this.currentQuestion = this.currentQuestionsSet.questions[0];

        this.totalQuestions = this.currentQuestionsSet.questions.length;
        this.continueNextLevel = false;
    }

    submitAnswer(answer) {
        if (answer.answer == this.currentQuestion.answer) {
            this.score = this.score + 1;

            if (this.score > 2) {
                this.continueNextLevel = true;                
            }
        }

        let index = this.currentQuestionsSet.questions.indexOf(this.currentQuestion) + 1;

        if (index < this.currentQuestionsSet.questions.length) {           
            this.currentQuestion = this.currentQuestionsSet.questions[index];
            this.percentComplete = (index / this.currentQuestionsSet.questions.length) * 100;
        }
        else {

            if (this.continueNextLevel === true && this.level != Level.B1) {

                var level = this.currentQuestionsSet.level;
                if (level === Level.A1) {
                    this.level = Level.A2;
                }
                if (level === Level.A2) {
                    this.level = Level.B1;
                }

                let setIndex = this.questionSetList.indexOf(this.currentQuestionsSet);
                this.currentQuestionsSet = this.questionSetList[setIndex + 1]
                this.percentComplete = 0;
                this.currentQuestion = this.currentQuestionsSet.questions[0];
                
            }
            else {
                this.testOver = true;
                this.level = this.currentQuestionsSet.level;
            }


        }     
    }

    getLevelName(): string {
        return Level[this.level];
    }

    getQuestionNumber(): number {
        return this.currentQuestionsSet.questions.indexOf(this.currentQuestion)+1;
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


