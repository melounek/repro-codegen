```
yarn
yarn codegen  # generate types in watch mode
```

Actual issue is when I change type in `myQuery.ts`.

It would work if the type is used only in it's file, but when exported, if fails on:

```
Unable to load from file "**/schema.ts": Schema must contain uniquely named types but contains multiple types named "MyType".
```

because of some cache probably
