import { AnyFieldApi, useForm } from "@tanstack/react-form"
import { cn } from "../utils/utils";
import { useEffect } from "react";
import { insertThought } from "../api/api";

export type thoughts = {
    text : string
};

function FieldInfo({ field }: { field: AnyFieldApi }) {
    return (
      <>
        {field.state.meta.isTouched && field.state.meta.errors.length ? (
          <em  className="text-red-600">{field.state.meta.errors.join(',')}</em>
        ) : null}
        {field.state.meta.isValidating ? '' : null}
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
            insertThought(value.handle, value.title, value.message);
            value.title = "";
            value.message = "";
        },
        validators: {
          // Add validators to the form the same way you would add them to a field
          onChange({ value }) {
            if (value.message.length < 1) {
              return 'Must be 13 or older to sign'
            }
            return undefined
          },        
        }
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
            // validators={{
            //   onChange: ({ value }) =>
            //     !value
            //       ? 'a handle is required'
            //         : undefined,
            //   // onChangeAsyncDebounceMs: 500,
            //   // onChangeAsync: async ({ value }) => {
            //   //   await new Promise((resolve) => setTimeout(resolve, 1000))
            //   //   return (
            //   //     value.includes('error') && 'No "error" allowed in first name'
            //   //   )
            //   // },
            // }}
        
            children={(field) => {
              return (
                <section className="grid ">
                  <div className="flex">
                    <label htmlFor={field.name}>handle:</label>
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
                    maxLength={30}
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
                <section className="grid">
                <div className="flex">
                  <label htmlFor={field.name}>title: (optional)</label>
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
                  maxLength={30}
                />
                
              </section>                
              )
            }}
          />
        </div>        

        <div className="w-full">
          <form.Field
            name="message"
            children={(field) => (
              <section className="grid">
              <div className="flex ">
                <label htmlFor={field.name}>message: ({field.state.value.length}/1000)</label>
                <div className="mr-auto">
                  <FieldInfo field={field} />  
                </div>
              </div>
              <textarea
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="border-2 h-[200px] w-full"
                  maxLength={1000}
                />
                
              
            </section>
            )}
            validators={{
              onChange: ({ value }) =>
                !value
                  ?  '*'
                    : undefined,
              // onChangeAsyncDebounceMs: 500,
              // onChangeAsync: async ({ value }) => {
              //   await new Promise((resolve) => setTimeout(resolve, 1000))
              //   return (
              //     value.includes('error') && 'No "error" allowed in first name'
              //   )
              // },
            }}            
          />
        </div>
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <>
              <button type="submit" disabled={!canSubmit}
              className={cn("l-auto border-2 mt-4 pl-1 pr-1 w-full shadow-xl", 
                            // isSubmitting ? 'sending...' : 'text-2xl'
              )}>
                {isSubmitting ? 'sending...' : 'send'}
              </button>
            </>
          )}
        />
      </form>
    </div>
  )
}