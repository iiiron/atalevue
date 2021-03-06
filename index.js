
import BasicInput from './src/components/input/basicInput/index.vue'
import BankCardInput from './src/components/input/bankCardInput/index.vue'
import CommonInput from './src/components/input/commonInput/index.vue'
import IdCardInput from './src/components/input/idCardInput/index.vue'
import ImgValiInput from './src/components/input/imgValiInput/index.vue'
import MoneyInput from './src/components/input/moneyInput/index.vue'
import MsgValiInput from './src/components/input/msgValiInput/index.vue'
import NumberInput from './src/components/input/numberInput/index.vue'
import PassWordInput from './src/components/input/passWordInput/index.vue'
import PhoneNumInput from './src/components/input/phoneNumInput/index.vue'
import PickInput from './src/components/input/pickInput/index.vue'
import UserNameInput from './src/components/input/userNameInput/index.vue'

import BankCard from './src/components/dataTag/bankCard'
import IdCard from './src/components/dataTag/idCard'
import Money from './src/components/dataTag/money'
import PhoneNumber from './src/components/dataTag/phoneNumber'
import Name from './src/components/dataTag/name'

import InputManager from "./src/components/input/InputManager.js"
import CountDown from "./src/utils/CountDown.js"
import weStorage from "./src/utils/weStorage.js"
import weLodash from "./src/utils/weLodash.js"
import weStoreFactory from './src/utils/weStoreFactory.js'

export {
	// input
	BasicInput,
	BankCardInput,
	CommonInput,
	IdCardInput,
	ImgValiInput,
	MoneyInput,
	MsgValiInput,
	NumberInput,
	PassWordInput,
	PhoneNumInput,
	PickInput,
	UserNameInput,

	// dataTag
	BankCard,
	IdCard,
	Money,
	PhoneNumber,
	Name,

	// js
	InputManager,
	CountDown,
	weStorage,
	weLodash,
	weStoreFactory
}