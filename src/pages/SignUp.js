import React from 'react';

function SignUp(){

    return(
        <form className="join-form" action="/auth/join" method="POST" name="join">
            <div className="join-form__title">
                Welcome!
            </div>
            <div className="join-form__field-wrap">
                <div>
                    <input className="join-form__input join-form__input_field_id" name="id" type="text" placeholder="아이디"/>
                    <span className="join-form__field-message join-form__field-message_field_id"></span>
                </div>
                <button className="join-form__check-id-exists" type="button">중복확인</button>
            </div>
            <div className="join-form__field-wrap">
                <div>
                    <input className="join-form__input join-form__input_field_password" name="password" type="password" placeholder="비밀번호"/>
                    <span className="join-form__field-message join-form__field-message_field_password">message</span>
                </div>
            </div>
            <div className="join-form__field-wrap">
                <div>
                    <input className="join-form__input join-form__input_field_confirm-password" name="confirm-password" type="password" placeholder="비밀번호 재입력"/>
                    <span className="join-form__field-message join-form__field-message_field_confirm-password">message</span>
                </div>
            </div>
            <div className="join-form__field-wrap">
                <div>
                    <input className="join-form__input join-form__input_field_email-address" name="emailAddress" type="text" placeholder="이메일 주소"/>
                    <span className="join-form__field-message join-form__field-message_field_email-address">message</span>
                </div>
            </div>
            <div className="join-form__submit-wrap">
                <input className="join-form__submit" name="submit" type="submit" value="가입하기"/>
            </div>
            <div className="login-with-external-accounts-wrap">
                <div className="login-with-external-accounts__title">NAVER 계정을 가지고 계신가요?</div>
                <div className="login-with-external-accounts__buttons">
                    <div id="naverIdLogin"></div>
                </div>
            </div>
        </form>
    )
}

export default SignUp;