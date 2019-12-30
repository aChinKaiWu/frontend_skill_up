use Croma

defmodule Tttgear.Gettext do
  use Antikythera.Gettext, otp_app: :tttgear

  defun put_locale(locale :: v[String.t]) :: nil do
    Gettext.put_locale(__MODULE__, locale)
  end
end
