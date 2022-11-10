import styles from "./style.module.scss";
import { useMainContext } from '../../context';
import cn from "classnames";
import { Circle, Tick } from '../icons';
import { COLORS, THEMES } from '../../constants';


const ThemeSelect = ({ onClose }) => {
  const { themes, changeTheme, colors, changeColor } = useMainContext();

  return (
    <div className={styles.modal} >
      <div className={styles.themeModal}>
        <div className={styles.title}>
          Customize your view
        </div>
        <div className={styles.selectColor}>
          <span>Color</span>
          <div className={styles.colorContainer}>
            {COLORS.map((color, index) => {
              return (
                <div key={index} className={cn(styles.colorButton)}>
                  <label className={styles.color}  >
                    <Circle fill={color.color} />
                    <input
                      type="radio"
                      value={color.name}
                      name="name"
                      checked={color.name === colors}
                      onChange={(e) => changeColor(e.target.value)}
                    />
                    {
                      color.name === colors && <div className={styles.checked}><Tick fill="#fff" /></div>
                    }
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.themeSelect}>
          <span>Background</span>
          <div className={styles.themeContainer}>
            {THEMES.map((theme, index) => (
              <label key={index} className={cn(styles.label, theme.name === themes ? styles.checked : "")}>
                <input
                  type="radio"
                  value={theme.name}
                  name="theme"
                  checked={theme.name === themes}
                  onChange={(e) => changeTheme(e.target.value)}
                />
                <span>{theme.label}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <button
            className={styles.button}
            onClick={onClose}
          >Done</button>
        </div>
      </div>
      <div className={styles.overlay} onClick={onClose} />
    </div >
  );
};

export default ThemeSelect;
