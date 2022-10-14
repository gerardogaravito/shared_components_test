import React, { FC } from 'react';
import { Button } from 'react-native';

interface ICustomButton {
  title: string;
}

const CustomButton: FC<ICustomButton> = ({ title }) => {
  const handlePress = () => {
    console.log('Pressed !!!');
  };

  return <Button color={'blue'} title={title} onPress={handlePress}></Button>;
};

export default CustomButton;
