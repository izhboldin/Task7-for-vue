export default {
    data() {
        return {
            isOpen: false,
            nameValue: '',
            emailValue: '',
            passValue: '',
            conclusion: null,
        }
    },
    methods: {
        close() {
            this.isOpen = !this.isOpen;
        },
        isValidation() {
            // console.log(this.nameValue);
            // console.log(this.emailValue);
            // console.log(this.passValue);
            if(this.nameValue === '' || !this.isValidEmail(this.emailValue) || this.passValue < 5){
                return this.conclusion = 'Проверьте форму'
            }
            return this.conclusion = 'Отлично'
        },
        isValidEmail(email) {
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            return emailPattern.test(email);
        },
    },
}