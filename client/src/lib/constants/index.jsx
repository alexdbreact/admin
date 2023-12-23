import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'ملخص الرصد',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'users',
		label: 'المخالفات المرسلة',
		path: '/users',
		icon: < HiOutlineUsers/>
	},
	{
		key: 'orders',
		label: 'الأحياء',
		path: '/orders',
		icon: <HiOutlineShoppingCart />
	},
	{
		key: 'customers',
		label: 'خريطة الرصد',
		path: '/customers',
		icon: <HiOutlineCube />
	},
	{
		key: 'transactions',
		label: 'الوارد من الأحياء',
		path: '/transactions',
		icon: <HiOutlineDocumentText />
	},
	{
		key: 'messages',
		label: 'رسائل / تعليقات',
		path: '/messages',
		icon: <HiOutlineAnnotation />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]
