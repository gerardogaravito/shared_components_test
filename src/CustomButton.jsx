import React, { FC } from 'react';
import { Button } from 'react-native';

// interface ICustomButton {
//   title: string;
// }

// const CustomButton: FC<ICustomButton> = ({ title }) => {
const CustomButton = () => {
  const handlePress = () => {
    console.log('Pressed !!!');
  };

  return <Button color={'blue'} title={'boton'} onPress={handlePress} />;
};

export default CustomButton;
