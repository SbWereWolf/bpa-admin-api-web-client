<script>

    let noda = "79001113302";

    const headers = new Headers(
        {"Content-Type": "application/json;",});

    let request_identification = "";

    let type;
    let citizenship;
    let id_surname;
    let id_name;
    let id_patronymic;
    let birth_date;
    let birth_place;
    let serial;
    let number;
    let issue_date;
    let issuer;
    let division;
    let expire_date;

    let reg_source;
    let reg_country_iso_code;
    let reg_postal_code;
    let reg_region_type;
    let reg_region_name;
    let reg_area_type;
    let reg_area_name;
    let reg_city_type;
    let reg_city_name;
    let reg_settlement_type;
    let reg_settlement_name;
    let reg_street_type;
    let reg_street_name;
    let reg_house_fias_id;
    let reg_house_type;
    let reg_house;
    let reg_block_type;
    let reg_block;
    let reg_flat_fias_id;
    let reg_flat_type;
    let reg_flat;
    let reg_room;

    let loc_source;
    let loc_country_iso_code;
    let loc_postal_code;
    let loc_region_type;
    let loc_region_name;
    let loc_area_type;
    let loc_area_name;
    let loc_city_type;
    let loc_city_name;
    let loc_settlement_type;
    let loc_settlement_name;
    let loc_street_type;
    let loc_street_name;
    let loc_house_fias_id;
    let loc_house_type;
    let loc_house;
    let loc_block_type;
    let loc_block;
    let loc_flat_fias_id;
    let loc_flat_type;
    let loc_flat;
    let loc_room;

    let mail_source;
    let mail_country_iso_code;
    let mail_postal_code;
    let mail_region_type;
    let mail_region_name;
    let mail_area_type;
    let mail_area_name;
    let mail_city_type;
    let mail_city_name;
    let mail_settlement_type;
    let mail_settlement_name;
    let mail_street_type;
    let mail_street_name;
    let mail_house_fias_id;
    let mail_house_type;
    let mail_house;
    let mail_block_type;
    let mail_block;
    let mail_flat_fias_id;
    let mail_flat_type;
    let mail_flat;
    let mail_room;

    const request_identification_data = () => {

        let session = window.sessionStorage.getItem("session");
        let params = {
            "session": session,
            "noda": noda,
        };

        let request = new Request(
            `http://gitlab.rnko-kholmsk.ru:8081/api/v1/noda/existence`, {
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
                    request_identification = "Кошелёк не найден";
                    throw new Error(request_identification);
                }

                if (!is_success && response.status === 419) {
                    window.location.href = "index.html";
                }

                if (!is_success) {

                    request_identification = "При выполнении запроса" +
                        " произошла не известная ошибка," +
                        " подробности в консоли браузера";
                    throw new Error(request_identification);
                }
            })
            .then((json) => {
                noda_id = json.noda_id;
                request_identification = JSON.stringify(json);
            })
            .then(() => {
                params = {
                    "session": session,
                    "noda_id": noda_id,
                };
                request = new Request(
                    `http://gitlab.rnko-kholmsk.ru:8081/api/v1/identification/request`, {
                        method: 'POST',
                        headers: headers,
                        body: JSON.stringify(params),
                    });

                fetch(request)
                    .then((response) => response.json())
                    .then((json) => {
                        request_identification = JSON.stringify(json);

                        type = json.identity_object.type;
                        citizenship = json.identity_object.citizenship;
                        id_surname = json.identity_object.surname;
                        id_name = json.identity_object.name;
                        id_patronymic = json.identity_object.patronymic;
                        birth_date = json.identity_object.birth_date;
                        birth_place = json.identity_object.birth_place;
                        serial = json.identity_object.serial;
                        number = json.identity_object.number;
                        issue_date = json.identity_object.issue_date;
                        issuer = json.identity_object.issuer;
                        division = json.identity_object.division;
                        expire_date = json.identity_object.expire_date;

                        reg_source = json.address_reg.source;
                        reg_country_iso_code = json.address_reg.country_iso_code;
                        reg_postal_code = json.address_reg.postal_code;
                        reg_region_type = json.address_reg.region_type;
                        reg_region_name = json.address_reg.region_name;
                        reg_area_type = json.address_reg.area_type;
                        reg_area_name = json.address_reg.area_name;
                        reg_city_type = json.address_reg.city_type;
                        reg_city_name = json.address_reg.city_name;
                        reg_settlement_type = json.address_reg.settlement_type;
                        reg_settlement_name = json.address_reg.settlement_name;
                        reg_street_type = json.address_reg.street_type;
                        reg_street_name = json.address_reg.street_name;
                        reg_house_fias_id = json.address_reg.house_fias_id;
                        reg_house_type = json.address_reg.house_type;
                        reg_house = json.address_reg.house;
                        reg_block_type = json.address_reg.block_type;
                        reg_block = json.address_reg.block;
                        reg_flat_fias_id = json.address_reg.flat_fias_id;
                        reg_flat_type = json.address_reg.flat_type;
                        reg_flat = json.address_reg.flat;
                        reg_room = json.address_reg.room;

                        loc_source = json.address_loc.source;
                        loc_country_iso_code = json.address_loc.country_iso_code;
                        loc_postal_code = json.address_loc.postal_code;
                        loc_region_type = json.address_loc.region_type;
                        loc_region_name = json.address_loc.region_name;
                        loc_area_type = json.address_loc.area_type;
                        loc_area_name = json.address_loc.area_name;
                        loc_city_type = json.address_loc.city_type;
                        loc_city_name = json.address_loc.city_name;
                        loc_settlement_type = json.address_loc.settlement_type;
                        loc_settlement_name = json.address_loc.settlement_name;
                        loc_street_type = json.address_loc.street_type;
                        loc_street_name = json.address_loc.street_name;
                        loc_house_fias_id = json.address_loc.house_fias_id;
                        loc_house_type = json.address_loc.house_type;
                        loc_house = json.address_loc.house;
                        loc_block_type = json.address_loc.block_type;
                        loc_block = json.address_loc.block;
                        loc_flat_fias_id = json.address_loc.flat_fias_id;
                        loc_flat_type = json.address_loc.flat_type;
                        loc_flat = json.address_loc.flat;
                        loc_room = json.address_loc.room;

                        mail_source = json.address_mail.source;
                        mail_country_iso_code = json.address_mail.country_iso_code;
                        mail_postal_code = json.address_mail.postal_code;
                        mail_region_type = json.address_mail.region_type;
                        mail_region_name = json.address_mail.region_name;
                        mail_area_type = json.address_mail.area_type;
                        mail_area_name = json.address_mail.area_name;
                        mail_city_type = json.address_mail.city_type;
                        mail_city_name = json.address_mail.city_name;
                        mail_settlement_type = json.address_mail.settlement_type;
                        mail_settlement_name = json.address_mail.settlement_name;
                        mail_street_type = json.address_mail.street_type;
                        mail_street_name = json.address_mail.street_name;
                        mail_house_fias_id = json.address_mail.house_fias_id;
                        mail_house_type = json.address_mail.house_type;
                        mail_house = json.address_mail.house;
                        mail_block_type = json.address_mail.block_type;
                        mail_block = json.address_mail.block;
                        mail_flat_fias_id = json.address_mail.flat_fias_id;
                        mail_flat_type = json.address_mail.flat_type;
                        mail_flat = json.address_mail.flat;
                        mail_room = json.address_mail.room;
                    });

            });
    }

    let confirm_identification = "";

    const confirm_identification_data = () => {

        let session = window.sessionStorage.getItem("session");
        let params = {
            "session": session,
            "noda": noda,
        };

        let request = new Request(
            `http://gitlab.rnko-kholmsk.ru:8081/api/v1/noda/existence`, {
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
                    confirm_identification = "Кошелёк не найден";
                    throw new Error(confirm_identification);
                }

                if (!is_success && response.status === 419) {
                    window.location.href = "index.html";
                }

                if (!is_success) {

                    confirm_identification = "При выполнении запроса" +
                        " произошла не известная ошибка," +
                        " подробности в консоли браузера";
                    throw new Error(confirm_identification);
                }
            })
            .then((json) => {
                noda_id = json.noda_id;
                confirm_identification = JSON.stringify(json);
            })
            .then(() => {
                let identity_object = {
                    "type": type,
                    "citizenship": citizenship,
                    "surname": id_surname,
                    "name": id_name,
                    "patronymic": id_patronymic,
                    "birth_date": birth_date,
                    "birth_place": birth_place,
                    "serial": serial,
                    "number": number,
                    "issue_date": issue_date,
                    "issuer": issuer,
                    "division": division,
                    "expire_date": expire_date,
                };
                let address_reg = {
                    "type": "reg",
                    "source": reg_source,
                    "country_iso_code": reg_country_iso_code,
                    "postal_code": reg_postal_code,
                    "region_type": reg_region_type,
                    "region_name": reg_region_name,
                    "area_type": reg_area_type,
                    "area_name": reg_area_name,
                    "city_type": reg_city_type,
                    "city_name": reg_city_name,
                    "settlement_type": reg_settlement_type,
                    "settlement_name": reg_settlement_name,
                    "street_type": reg_street_type,
                    "house_type": reg_house_type,
                    "house": reg_house,
                    "block_type": reg_block_type,
                    "block": reg_block,
                    "flat_type": reg_flat_type,
                    "flat": reg_flat,
                };
                let address_loc = {
                    "type": "loc",
                    "source": loc_source,
                    "country_iso_code": loc_country_iso_code,
                    "postal_code": loc_postal_code,
                    "region_type": loc_region_type,
                    "region_name": loc_region_name,
                    "area_type": loc_area_type,
                    "area_name": loc_area_name,
                    "city_type": loc_city_type,
                    "city_name": loc_city_name,
                    "settlement_type": loc_settlement_type,
                    "settlement_name": loc_settlement_name,
                    "street_type": loc_street_type,
                    "house_type": loc_house_type,
                    "house": loc_house,
                    "block_type": loc_block_type,
                    "block": loc_block,
                    "flat_type": loc_flat_type,
                    "flat": loc_flat,
                };
                let address_mail = {
                    "type": "mail",
                    "source": mail_source,
                    "country_iso_code": mail_country_iso_code,
                    "postal_code": mail_postal_code,
                    "region_type": mail_region_type,
                    "region_name": mail_region_name,
                    "area_type": mail_area_type,
                    "area_name": mail_area_name,
                    "city_type": mail_city_type,
                    "city_name": mail_city_name,
                    "settlement_type": mail_settlement_type,
                    "settlement_name": mail_settlement_name,
                    "street_type": mail_street_type,
                    "house_type": mail_house_type,
                    "house": mail_house,
                    "block_type": mail_block_type,
                    "block": mail_block,
                    "flat_type": mail_flat_type,
                    "flat": mail_flat,
                };
                params = {
                    "session": session,
                    "noda_id": noda_id,
                    "identity_object": identity_object,
                    "address_reg": address_reg,
                    "is_matches_reg": false,
                    "address_loc": address_loc,
                    "like_a": "none",
                    "address_mail": address_mail,
                };
                request = new Request(
                    `http://gitlab.rnko-kholmsk.ru:8081/api/v1/identification/update`, {
                        method: 'POST',
                        headers: headers,
                        body: JSON.stringify(params),
                    });

                fetch(request)
                    .then((response) => response.json())
                    .then((json) => {
                        confirm_identification = JSON.stringify(json);
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
<h2>Полная идентификация</h2>
<div>
    <button on:click={request_identification_data}>
        Получить предварительно заполненные данные
    </button>
    <p>{request_identification}</p>
</div>
<form>
    <h3>Удостоверение личности</h3>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="type">
            Тип удостоверения
        </label>
        <label class="col-sm-2 col-form-label" for="type">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{type}" class="form-control" id="type" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="citizenship">
            Гражданство
        </label>
        <label class="col-sm-2 col-form-label" for="citizenship">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{citizenship}" class="form-control" id="citizenship" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="id_surname">
            Фамилия
        </label>
        <label class="col-sm-2 col-form-label" for="id_surname">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{id_surname}" class="form-control" id="id_surname" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="id_name">
            Имя
        </label>
        <label class="col-sm-2 col-form-label" for="id_name">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{id_name}" class="form-control" id="id_name" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="id_patronymic">
            Отчество
        </label>
        <label class="col-sm-2 col-form-label" for="id_patronymic">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{id_patronymic}" class="form-control" id="id_patronymic" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="birth_date">
            Дата рождения
        </label>
        <label class="col-sm-2 col-form-label" for="birth_date">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{birth_date}" class="form-control" id="birth_date" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="birth_place">
            Место рождения
        </label>
        <label class="col-sm-2 col-form-label" for="birth_place">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{birth_place}" class="form-control" id="birth_place" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="serial">
            Серия
        </label>
        <label class="col-sm-2 col-form-label" for="serial">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{serial}" class="form-control" id="serial" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="number">
            Номер
        </label>
        <label class="col-sm-2 col-form-label" for="number">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{number}" class="form-control" id="number" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="issue_date">
            Дата выдачи
        </label>
        <label class="col-sm-2 col-form-label" for="issue_date">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{issue_date}" class="form-control" id="issue_date" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="issuer">
            Орган выдавший
        </label>
        <label class="col-sm-2 col-form-label" for="issuer">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{issuer}" class="form-control" id="issuer" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="division">
            Отдел
        </label>
        <label class="col-sm-2 col-form-label" for="division">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{division}" class="form-control" id="division" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="expire_date">
            Дата истечения
        </label>
        <label class="col-sm-2 col-form-label" for="expire_date">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{expire_date}" class="form-control" id="expire_date" type="text">
        </div>
    </div>
    <h3>Адрес регистрации</h3>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="reg_source">
            Адрес одной строкой
        </label>
        <label class="col-sm-2 col-form-label" for="reg_source">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{reg_source}" class="form-control" id="reg_source" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="reg_country_iso_code">
            Страна
        </label>
        <label class="col-sm-2 col-form-label" for="reg_country_iso_code">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{reg_country_iso_code}" class="form-control" id="reg_country_iso_code" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="reg_postal_code">
            Почтовый индекс
        </label>
        <label class="col-sm-2 col-form-label" for="reg_postal_code">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{reg_postal_code}" class="form-control" id="reg_postal_code" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="reg_region_type">
            Тип региона
        </label>
        <label class="col-sm-2 col-form-label" for="reg_region_type">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{reg_region_type}" class="form-control" id="reg_region_type" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="reg_region_name">
            Наименование региона
        </label>
        <label class="col-sm-2 col-form-label" for="reg_region_name">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{reg_region_name}" class="form-control" id="reg_region_name" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="reg_area_type">
            Тип района
        </label>
        <label class="col-sm-2 col-form-label" for="reg_area_type">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{reg_area_type}" class="form-control" id="reg_area_type" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="reg_area_name">
            Наименование района
        </label>
        <label class="col-sm-2 col-form-label" for="reg_area_name">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{reg_area_name}" class="form-control" id="reg_area_name" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="reg_city_type">
            Тип города
        </label>
        <label class="col-sm-2 col-form-label" for="reg_city_type">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{reg_city_type}" class="form-control" id="reg_city_type" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="reg_city_name">
            Наименование города
        </label>
        <label class="col-sm-2 col-form-label" for="reg_city_name">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{reg_city_name}" class="form-control" id="reg_city_name" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="reg_settlement_type">
            Тип населённого пункта
        </label>
        <label class="col-sm-2 col-form-label" for="reg_settlement_type">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{reg_settlement_type}" class="form-control" id="reg_settlement_type" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="reg_settlement_name">
            Наименование населенного пункта
        </label>
        <label class="col-sm-2 col-form-label" for="reg_settlement_name">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{reg_settlement_name}" class="form-control" id="reg_settlement_name" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="reg_street_type">
            Тип улицы
        </label>
        <label class="col-sm-2 col-form-label" for="reg_street_type">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{reg_street_type}" class="form-control" id="reg_street_type" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="reg_street_name">
            Наименование улицы
        </label>
        <label class="col-sm-2 col-form-label" for="reg_street_name">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{reg_street_name}" class="form-control" id="reg_street_name" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="reg_house_type">
            Тип дома
        </label>
        <label class="col-sm-2 col-form-label" for="reg_house_type">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{reg_house_type}" class="form-control" id="reg_house_type" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="reg_house">
            Номер дома
        </label>
        <label class="col-sm-2 col-form-label" for="reg_house">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{reg_house}" class="form-control" id="reg_house" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="reg_block_type">
            Наименование типа дополнительного номера дома
        </label>
        <label class="col-sm-2 col-form-label" for="reg_block_type">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{reg_block_type}" class="form-control" id="reg_block_type" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="reg_block">
            Дополнительный номер дома
        </label>
        <label class="col-sm-2 col-form-label" for="reg_block">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{reg_block}" class="form-control" id="reg_block" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="reg_flat_type">
            Тип помещения
        </label>
        <label class="col-sm-2 col-form-label" for="reg_flat_type">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{reg_flat_type}" class="form-control" id="reg_flat_type" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="reg_flat">
            Номер помещения
        </label>
        <label class="col-sm-2 col-form-label" for="reg_flat">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{reg_flat}" class="form-control" id="reg_flat" type="text">
        </div>
    </div>
    <h3>Адрес местонахождения</h3>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="loc_source">
            Адрес одной строкой
        </label>
        <label class="col-sm-2 col-form-label" for="loc_source">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{loc_source}" class="form-control" id="loc_source" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="loc_country_iso_code">
            Страна
        </label>
        <label class="col-sm-2 col-form-label" for="loc_country_iso_code">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{loc_country_iso_code}" class="form-control" id="loc_country_iso_code" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="loc_postal_code">
            Почтовый индекс
        </label>
        <label class="col-sm-2 col-form-label" for="loc_postal_code">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{loc_postal_code}" class="form-control" id="loc_postal_code" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="loc_region_type">
            Тип региона
        </label>
        <label class="col-sm-2 col-form-label" for="loc_region_type">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{loc_region_type}" class="form-control" id="loc_region_type" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="loc_region_name">
            Наименование региона
        </label>
        <label class="col-sm-2 col-form-label" for="loc_region_name">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{loc_region_name}" class="form-control" id="loc_region_name" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="loc_area_type">
            Тип района
        </label>
        <label class="col-sm-2 col-form-label" for="loc_area_type">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{loc_area_type}" class="form-control" id="loc_area_type" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="loc_area_name">
            Наименование района
        </label>
        <label class="col-sm-2 col-form-label" for="loc_area_name">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{loc_area_name}" class="form-control" id="loc_area_name" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="loc_city_type">
            Тип города
        </label>
        <label class="col-sm-2 col-form-label" for="loc_city_type">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{loc_city_type}" class="form-control" id="loc_city_type" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="loc_city_name">
            Наименование города
        </label>
        <label class="col-sm-2 col-form-label" for="loc_city_name">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{loc_city_name}" class="form-control" id="loc_city_name" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="loc_settlement_type">
            Тип населённого пункта
        </label>
        <label class="col-sm-2 col-form-label" for="loc_settlement_type">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{loc_settlement_type}" class="form-control" id="loc_settlement_type" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="loc_settlement_name">
            Наименование населенного пункта
        </label>
        <label class="col-sm-2 col-form-label" for="loc_settlement_name">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{loc_settlement_name}" class="form-control" id="loc_settlement_name" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="loc_street_type">
            Тип улицы
        </label>
        <label class="col-sm-2 col-form-label" for="loc_street_type">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{loc_street_type}" class="form-control" id="loc_street_type" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="loc_street_name">
            Наименование улицы
        </label>
        <label class="col-sm-2 col-form-label" for="loc_street_name">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{loc_street_name}" class="form-control" id="loc_street_name" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="loc_house_type">
            Тип дома
        </label>
        <label class="col-sm-2 col-form-label" for="loc_house_type">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{loc_house_type}" class="form-control" id="loc_house_type" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="loc_house">
            Номер дома
        </label>
        <label class="col-sm-2 col-form-label" for="loc_house">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{loc_house}" class="form-control" id="loc_house" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="loc_block_type">
            Наименование типа дополнительного номера дома
        </label>
        <label class="col-sm-2 col-form-label" for="loc_block_type">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{loc_block_type}" class="form-control" id="loc_block_type" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="loc_block">
            Дополнительный номер дома
        </label>
        <label class="col-sm-2 col-form-label" for="loc_block">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{loc_block}" class="form-control" id="loc_block" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="loc_flat_type">
            Тип помещения
        </label>
        <label class="col-sm-2 col-form-label" for="loc_flat_type">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{loc_flat_type}" class="form-control" id="loc_flat_type" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="loc_flat">
            Номер помещения
        </label>
        <label class="col-sm-2 col-form-label" for="loc_flat">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{loc_flat}" class="form-control" id="loc_flat" type="text">
        </div>
    </div>
    <h3>Адрес для почтовых отправлений</h3>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="mail_source">
            Адрес одной строкой
        </label>
        <label class="col-sm-2 col-form-label" for="mail_source">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{mail_source}" class="form-control" id="mail_source" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="mail_country_iso_code">
            Страна
        </label>
        <label class="col-sm-2 col-form-label" for="mail_country_iso_code">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{mail_country_iso_code}" class="form-control" id="mail_country_iso_code" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="mail_postal_code">
            Почтовый индекс
        </label>
        <label class="col-sm-2 col-form-label" for="mail_postal_code">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{mail_postal_code}" class="form-control" id="mail_postal_code" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="mail_region_type">
            Тип региона
        </label>
        <label class="col-sm-2 col-form-label" for="mail_region_type">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{mail_region_type}" class="form-control" id="mail_region_type" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="mail_region_name">
            Наименование региона
        </label>
        <label class="col-sm-2 col-form-label" for="mail_region_name">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{mail_region_name}" class="form-control" id="mail_region_name" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="mail_area_type">
            Тип района
        </label>
        <label class="col-sm-2 col-form-label" for="mail_area_type">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{mail_area_type}" class="form-control" id="mail_area_type" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="mail_area_name">
            Наименование района
        </label>
        <label class="col-sm-2 col-form-label" for="mail_area_name">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{mail_area_name}" class="form-control" id="mail_area_name" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="mail_city_type">
            Тип города
        </label>
        <label class="col-sm-2 col-form-label" for="mail_city_type">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{mail_city_type}" class="form-control" id="mail_city_type" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="mail_city_name">
            Наименование города
        </label>
        <label class="col-sm-2 col-form-label" for="mail_city_name">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{mail_city_name}" class="form-control" id="mail_city_name" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="mail_settlement_type">
            Тип населённого пункта
        </label>
        <label class="col-sm-2 col-form-label" for="mail_settlement_type">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{mail_settlement_type}" class="form-control" id="mail_settlement_type" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="mail_settlement_name">
            Наименование населенного пункта
        </label>
        <label class="col-sm-2 col-form-label" for="mail_settlement_name">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{mail_settlement_name}" class="form-control" id="mail_settlement_name" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="mail_street_type">
            Тип улицы
        </label>
        <label class="col-sm-2 col-form-label" for="mail_street_type">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{mail_street_type}" class="form-control" id="mail_street_type" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="mail_street_name">
            Наименование улицы
        </label>
        <label class="col-sm-2 col-form-label" for="mail_street_name">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{mail_street_name}" class="form-control" id="mail_street_name" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="mail_house_type">
            Тип дома
        </label>
        <label class="col-sm-2 col-form-label" for="mail_house_type">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{mail_house_type}" class="form-control" id="mail_house_type" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="mail_house">
            Номер дома
        </label>
        <label class="col-sm-2 col-form-label" for="mail_house">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{mail_house}" class="form-control" id="mail_house" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="mail_block_type">
            Наименование типа дополнительного номера дома
        </label>
        <label class="col-sm-2 col-form-label" for="mail_block_type">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{mail_block_type}" class="form-control" id="mail_block_type" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="mail_block">
            Дополнительный номер дома
        </label>
        <label class="col-sm-2 col-form-label" for="mail_block">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{mail_block}" class="form-control" id="mail_block" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="mail_flat_type">
            Тип помещения
        </label>
        <label class="col-sm-2 col-form-label" for="mail_flat_type">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{mail_flat_type}" class="form-control" id="mail_flat_type" type="text">
        </div>
    </div>
    <div class="row">
        <label class="col-sm-2 col-form-label" for="mail_flat">
            Номер помещения
        </label>
        <label class="col-sm-2 col-form-label" for="mail_flat">
            <i class="bi"></i>
        </label>
        <div class="col-sm-8">
            <input bind:value="{mail_flat}" class="form-control" id="mail_flat" type="text">
        </div>
    </div>
</form>
<div>
    <button on:click={confirm_identification_data}>
        Подтвердить идентификацию
    </button>
    <p>{confirm_identification}</p>
</div>
