//model that represents the preferences property
import { PreferencesModel } from './PreferencesModel'

export class UserModel {
  firstName = "";
  lastName = "";
  username = "";
  password = "";
  preferences = new PreferencesModel;

}