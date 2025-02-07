import React from 'react';

import MainLayout from '../../layouts/main-layout';

import withUser from '../../hocs/with-user';

function MainPage() {
  return (<MainLayout />);
}

export default withUser(MainPage);
