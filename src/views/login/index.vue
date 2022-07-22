<template>
	<h1 class="login">登录</h1>
	<van-form @submit="onSubmit">
		<van-cell-group inset>
			<van-field
				v-model="username"
				name="手机号"
				placeholder="手机号"
				:rules="[{ required: true, message: '请填写手机号' }]"
			/>
			<van-field
				v-model="password"
				type="password"
				name="手机验证码"
				placeholder="手机验证码"
				:rules="[{ required: true, message: '请填写手机验证码' }]"
			>
				<template #button>
					<span>获取验证码</span>
				</template>
			</van-field>
		</van-cell-group>
		<div style="margin: 16px;">
			<van-button block type="primary" native-type="submit">
				注册
			</van-button>
		</div>
		<van-field name="checkbox">
			<template #input>
				<van-checkbox v-model="checked" shape="square"/>
			</template>
		</van-field>
	</van-form>

</template>

<script>
import {ref} from 'vue';

export default {
	name: 'LoginView',
	setup() {
		const username = ref('');
		const password = ref('');
		const checked = ref(false);
		const onSubmit = (values) => {
			console.log('submit', values);
		};

		return {
			username,
			password,
			checked,
			onSubmit,
		};
	},
};

</script>

<style scoped>
input:-webkit-autofill {
	box-shadow: 0 0 0 1000px #f2f3f7 inset !important;
}

.login {
	margin: 50px 0;
	font-size: 40px;
}
</style>
