
// files
import reconnect from 'tools/reconnect'

const CustomerIcons = {
	mapStateToProps: (state) => ({
		favoriteColor: state.ui.toggle.favoriteColor
	})
}

export const connectToCustomerIcons = reconnect(
	CustomerIcons.mapStateToProps
)