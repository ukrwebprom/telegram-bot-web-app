const tg = window.Telegram.WebApp;

export const useTelegram = () => {
    const onTobbleButton = () => {
      if(tg.MainButton.isVisible) {
        tg.MainButton.show();
      } else {
        tg.MainButton.hide();
      }
    }
    return {
        tg,
        user: tg.initDataUnsafe?.user,
        onTobbleButton
    }
}