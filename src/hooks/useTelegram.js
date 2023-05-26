export const useTelegram = () => {
    const tg = window.Telegram.WebApp;
    const close = () => {
        tg.close();
    }

    const onTobbleButton = () => {
      if(tg.MainButton.isVisible) {
        tg.MainButton.hide();
      } else {
        tg.MainButton.show();
      }
    }
    return {
        tg,
        user: tg.initDataUnsafe?.user,
        onTobbleButton,
        close
    }
}