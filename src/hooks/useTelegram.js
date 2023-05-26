const tg = window.Telegram.WebApp;

export const useTelegram = () => {
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
        onTobbleButton
    }
}