import { ref } from "vue";
import { firebaseAuth } from "../firebase/config";

const error = ref(null);

const login = async (email, password) => {
  error.value = null;

  try {
    const res = await firebaseAuth.signInWithEmailAndPassword(email, password);
    error.value = null;

    return res;
  } catch (error) {
    error.value = "incorrect login credentials";
  }
};

const SignIn = () => {
  return { error, login };
};

export default SignIn;
