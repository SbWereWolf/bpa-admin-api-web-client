<script>

    let noda = "79001113302";
    let amount = 33;
    let executor_id = "80bf4285-eb26-4a93-b42a-08e0dfdff866";
    let operation_id = "";
    let timestamp = "2023-03-17T00:41:30+00:00";
    let surname = "Вольхин";
    let name = "Коля";
    let patronymic = "";
    let phone = 79022726535;
    let replenish_status = "";

    const headers = new Headers(
        {"Content-Type": "application/json;",});

    async function uuidv4() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }

    operation_id = uuidv4().then((uuid) => {
        operation_id = uuid;
    });

    const check = () => {

        let session = window.sessionStorage.getItem("session");
        let params = {
            "session": session,
            "executor_id": executor_id,
            "operation_id": operation_id,
        };
        let request = new Request(
            `http://89.17.59.146:8081/api/v1/replenish/status`, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(params),
            });

        fetch(request)
            .then((response) => {

                let is_success = [200, 201, 202].includes(response.status);
                if (is_success) {

                    return response.json()
                }

                if (!is_success && response.status === 419) {
                    window.location.href = "index.html";
                }

                if (!is_success) {

                    replenish_status = "При выполнении запроса" +
                        " произошла не известная ошибка," +
                        " подробности в консоли браузера";

                    throw new Error(replenish_status);
                }
            })
            .then((json) => {
                replenish_status = JSON.stringify(json);
            });
    }

    let replenish_result = "";

    const replenish = () => {

        let session = window.sessionStorage.getItem("session");
        let params = {
            "session": session,
            "noda": noda,
        };

        let request = new Request(
            `http://89.17.59.146:8081/api/v1/noda/existence`, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(params),
            });

        let noda_id = '';
        fetch(request)
            .then((response) => {

                let is_success = [200, 404].includes(response.status);
                if (is_success && response.status === 200) {

                    return response.json()
                }
                if (is_success && response.status === 404) {
                    replenish_result = "Кошелёк не найден";
                    throw new Error(replenish_result);
                }

                if (!is_success && response.status === 419) {
                    window.location.href = "index.html";
                }

                if (!is_success) {

                    replenish_result = "При выполнении запроса" +
                        " произошла не известная ошибка," +
                        " подробности в консоли браузера";
                    throw new Error(replenish_result);
                }
            })
            .then((json) => {
                noda_id = json.noda_id;
                replenish_result = JSON.stringify(json);
            })
            .then(() => {
                params = {
                    "session": session,
                    "noda_id": noda_id,
                    "amount": amount,
                    "currency": "RUB",
                    "executor_id": executor_id,
                    "operation_id": operation_id,
                    "timestamp": timestamp,
                    "surname": surname,
                    "name": name,
                    "patronymic": patronymic,
                    "phone": phone
                };
                request = new Request(
                    `http://89.17.59.146:8081/api/v1/replenish/request`, {
                        method: 'POST',
                        headers: headers,
                        body: JSON.stringify(params),
                    });

                fetch(request)
                    .then((response) => response.json())
                    .then((json) => {
                        replenish_result = JSON.stringify(json);
                    });

            });
    }
</script>

<h2>Номер Ноды</h2>
<form>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="noda">
            Noda
        </label>
        <label class="col-sm-2 col-form-label" for="noda">
            <i class="bi bi-telephone-fill"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{noda}" class="form-control" id="noda" type="text">
        </div>
    </div>
</form>

<h2>Пополнение</h2>
<form>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="amount">
            Сумма
        </label>
        <label class="col-sm-2 col-form-label" for="amount">
            <i class="bi bi-currency-exchange"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{amount}" class="form-control" id="amount" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="executor_id">
            Исполнитель перевода
        </label>
        <label class="col-sm-2 col-form-label" for="executor_id">
            <i class="bi bi-person-bounding-box"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{executor_id}" class="form-control" id="executor_id" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="operation_id">
            Уникальный идентификатор операции
        </label>
        <label class="col-sm-2 col-form-label" for="operation_id">
            <i class="bi bi-clipboard2-minus-fill"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{operation_id}" class="form-control" id="operation_id" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="timestamp">
            Время операции
        </label>
        <label class="col-sm-2 col-form-label" for="timestamp">
            <i class="bi bi-alarm-fill"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{timestamp}" class="form-control" id="timestamp" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="surname">
            Фамилия плательщика
        </label>
        <label class="col-sm-2 col-form-label" for="surname">
            <i class="bi bi-type"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{surname}" class="form-control" id="surname" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="name">
            Имя плательщика
        </label>
        <label class="col-sm-2 col-form-label" for="name">
            <i class="bi bi-type"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{name}" class="form-control" id="name" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="patronymic">
            Отчество плательщика
        </label>
        <label class="col-sm-2 col-form-label" for="patronymic">
            <i class="bi bi-type"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{patronymic}" class="form-control" id="patronymic" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="phone">
            Телефонный номер
        </label>
        <label class="col-sm-2 col-form-label" for="phone">
            <i class="bi bi-telephone-fill"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{phone}" class="form-control" id="phone" type="text">
        </div>
    </div>
</form>
<div>
    <button on:click={replenish}>
        Пополнить
    </button>
    <p>{replenish_result}</p>
</div>
<div>
    <button on:click={check}>
        Проверить
    </button>
    <p>{replenish_status}</p>
</div>