import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {styles} from './ProfilePhotoModalStyle';

const ProfilePhotoModal =({isVisible,onChange,onRemove,onClose,checkProfilePhoto})=>{
    return (
      <Modal
        animationIn={'fadeIn'}
        animationOut={'fadeOut'}
        coverScreen={true}
        isVisible={isVisible}
        onBackButtonPress={onClose}
        onBackdropPress={onClose}
        style={styles.container}
      >
        <View style={styles.viewContainer}>
          <TouchableOpacity style={styles.btnContainer} onPress={onChange}>
            <Text style={styles.btnText}>Change Profile Photo</Text>
          </TouchableOpacity>
          {checkProfilePhoto!==''&&(
            <TouchableOpacity style={styles.btnContainer} onPress={onRemove}>
            <Text style={styles.btnText}>Remove Profile Photo</Text>
          </TouchableOpacity>
          )}
          
          <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
            <Text style={styles.cancelBtnText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  };
  
  ProfilePhotoModal.defaultProps = {
    onChange: () => {},
    onRemove: () => {},
    onClose: () => {},
    visible: false,
  };
  

export default ProfilePhotoModal;



//style of modal


import {ms, ScaledSheet} from 'react-native-size-matters';
import {fonts} from 'theme';
import colors from 'theme/colors/colors';
import {colorPalates} from 'theme';


export const styles = ScaledSheet.create({
  container: {
    margin: 0,
    justifyContent: 'flex-end',
    width: '100%',
    flex: 1,
  },
  viewContainer:{
    backgroundColor: colors.white,
    padding: ms(10),
    borderTopLeftRadius: ms(20),
    borderTopEndRadius: ms(20),
    maxHeight: '50%',
    alignItems:"center"

  },
cancelBtnText:{
    color:colorPalates.AppTheme.text,
    fontFamily: fonts.primaryMediumFont,
    fontSize: ms(16),
    alignItems: 'center',
},
cancelButton: {
    width:"80%",
    marginHorizontal: ms(16),
    margin:ms(8),
    backgroundColor: colorPalates.grayShadeCC,
    height: ms(48),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: ms(8)
},

  btnContainer: {
    width:"80%",
    marginHorizontal: ms(16),
    margin:ms(8),
    borderColor: colorPalates.AppTheme.primary,
    borderWidth: .8,
    height: ms(48),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: ms(8)
  },
  btnText: {
    color:colorPalates.AppTheme.primary,
    fontFamily: fonts.primaryMediumFont,
    fontSize: ms(16),
    alignItems: 'center',
  },
});


//another screen to use this modal


<ProfilePhotoModal
      isVisible={isVisibleProfileModal}
      onClose={()=>setIsVisibleProfileModal(false)}
      onChange={()=>{setIsVisibleCameraModal(true);setIsVisibleProfileModal(false)}}
      onRemove={()=>{setProfilePhoto('');setIsVisibleProfileModal(false)}}
      checkProfilePhoto={profilePhoto}
      />
