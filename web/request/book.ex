use Croma

defmodule Tttgear.Request.Book do
  defmodule Number do
    use Croma.SubtypeOfInt, min: 1, max: 500
  end

  defmodule CreateRequest do
    alias Croma.Result

    use Croma.Struct, recursive_new?: true, fields: [
      author: Croma.String,
      title:  Croma.String,
      number: Number,
    ]

    def new(request) do
      request
      |> super()
      |> Result.map_error(fn _ -> %{"error_message" =>"invalid request body"} end)
    end
  end
end
