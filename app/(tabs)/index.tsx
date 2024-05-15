import { Image, StyleSheet, Platform } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#AEC57F', dark: '#AEC57F' }}
      headerImage={
        <Image
          source={require('@/assets/images/a-cat.png')}
          style={styles.reactLogo}
        />
      }>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 200,
    width: 300,
    top: 118,
    left: 90,
    position: 'absolute',
  },
});
