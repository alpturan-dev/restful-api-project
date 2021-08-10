const profile = new Profile();
const ui = new UI();

const searchProfile = document.querySelector('#searchProfile');

$('#searchProfile').keyup(function (e) {
    ui.clear();
    let text = e.target.value;

    if (text !== '') {
        profile.getProfile(text)
            .then(response => {
                if (response.profile.length === 0) {
                    ui.showAlert(text);
                } else {
                    ui.showProfile(response.profile[0]);
                    ui.showTodo(response.todo)
                }
            })
            .catch(error => {
                ui.showAlert(text);
            })
    }
});