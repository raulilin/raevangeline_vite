import { AnyFieldApi, useForm } from "@tanstack/react-form"

export type thoughts = {
    text : string
};

function FieldInfo({ field }: { field: AnyFieldApi }) {
    return (
      <>
        {field.state.meta.isTouched && field.state.meta.errors.length ? (
          <em>{field.state.meta.errors.join(',')}</em>
        ) : null}
        {field.state.meta.isValidating ? 'Validating...' : null}
      </>
    )
  }

export default function ExemploForm () {
    const form = useForm({
        defaultValues: {
          title: '',
          handle: '',
          message: '',
        },
        onSubmit: async ({ value }) => {
          console.log(value)
        },
    })

  return (
    <div className="w-full">
      <h1></h1>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          e.stopPropagation()
          form.handleSubmit()
        }}
      >
        <div>
          <form.Field
            name="handle"
            validators={{
              onChange: ({ value }) =>
                !value
                  ? 'a handle is required'
                    : undefined,
              // onChangeAsyncDebounceMs: 500,
              // onChangeAsync: async ({ value }) => {
              //   await new Promise((resolve) => setTimeout(resolve, 1000))
              //   return (
              //     value.includes('error') && 'No "error" allowed in first name'
              //   )
              // },
            }}
        
            children={(field) => {
              return (
                <section className="grid">
                  <div className="flex">
                    <label htmlFor={field.name}>handle: </label>
                    <div className="ml-auto mr-auto">
                      <FieldInfo field={field} />
                    </div>
                  </div>
                  <input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className="border-2 w-full max-w-[250px]"
                  />
                  
                </section>
              )
            }}
          />
        </div>        
        <div>
          <form.Field
            name="title"
            validators={{
              onChangeAsyncDebounceMs: 500,
              onChangeAsync: async ({ value }) => {
                await new Promise((resolve) => setTimeout(resolve, 1000))
                return (
                  value.includes('error') && 'No "error" allowed in first name'
                )
              },
            }}
            children={(field) => {
              return (
                <>
                  <label htmlFor={field.name}>title: </label>
                  <input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className="border-2 ml-auto w-[340px]"
                  />
                   <FieldInfo field={field} /> 
                </>
              )
            }}
          />
        </div>        
{/*
        <div className="flex">
          <form.Field
            name="message"
            children={(field) => (
              <>
                <label htmlFor={field.name}>message:</label>
                <textarea
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="border-2 h-[200px] w-[340px]"
                />
                <FieldInfo field={field} />
              </>
            )}
          />
        </div>
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <>
              <button type="submit" disabled={!canSubmit}
              className="ml-auto border-2">
                {isSubmitting ? '...' : 'Submit'}
              </button>
            </>
          )}
        /> */}
      </form>
    </div>
  )
}