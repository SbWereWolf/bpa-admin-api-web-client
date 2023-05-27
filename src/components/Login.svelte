<script>

    let login = "bpa1";
    let password = "FS3E2VR2u4";
    let service_point_id = "bpa_support_office_unique_identity";

    let login_result = "";

    const headers = new Headers(
        {"Content-Type": "application/json;",});

    const open_session = () => {

        let params = {
            "login": login,
            "password_hash": password,
            "service_point_id": service_point_id,
        };
        let request = new Request(
            `http://89.17.59.146:8081/api/v1/session`, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(params),
            });

        fetch(request)
            .then((response) => {

                if (response.status === 201) {
                    response.json()
                        .then((data) => {
                                login_result = JSON.stringify(data);

                                if (!window) {
                                    login_result = login_result +
                                        "\n" +
                                        "Сессия работы была открыта," +
                                        " но глобальный объект window" +
                                        " недоступен, не возможно" +
                                        " сохранить идентификатор сессии";
                                }

                                if (window) {
                                    window.sessionStorage.setItem(
                                        "session",
                                        data.session);

                                    window.location.href = "replenish.html";
                                }
                            }
                        );

                }

                let result = null;
                if (response.status === 404) {
                    result = {
                        "is_login_fail": true,
                        "explanation": "Сессия работы не была открыта." +
                            " Введены не верные логин или пароль",
                    }
                }
                if (response.status === 400) {
                    result = {
                        "is_login_fail": true,
                        "explanation": "Сессия работы не была открыта." +
                            " Не верный формат запроса",
                    }
                }
                if (response.status === 500) {
                    result = {
                        "is_login_fail": true,
                        "explanation": "Сессия работы не была открыта." +
                            " Сбой в работе сервера," +
                            " обратитесь в тех поддержку",
                    }
                }

                if (result && result.is_login_fail) {
                    login_result = result.explanation;
                }

                if (!result) {
                    login_result = "При выполнении запроса" +
                        " произошла не известная ошибка," +
                        " подробности в консоли браузера";
                }
            });
    }

</script>
<h2>Вход в систему</h2>
<form>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="login">
            Login
        </label>
        <label class="col-sm-2 col-form-label" for="login">
            <i class="bi bi-person-fill"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{login}" class="form-control" id="login" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="password">
            Password
        </label>
        <label class="col-sm-2 col-form-label" for="password">
            <i class="bi bi-patch-question-fill"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{password}" class="form-control" id="password" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="service_point_id">
            Service point id
        </label>
        <label class="col-sm-2 col-form-label" for="service_point_id">
            <i class="bi bi-shop"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{service_point_id}" class="form-control" id="service_point_id" type="text">
        </div>
    </div>
</form>
<div>
    <button on:click={open_session}>
        Открыть сессию работы с кошельком
    </button>
    <p>{login_result}</p>
</div>