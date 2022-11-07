import { FormType } from "./const";

export const OrderFormView = (type, lang) => {
  if(type === FormType.TRANSLATE) {
    return `<fieldset data-field="translate">
      <div class="order-form__field">
        <input class="main-input" type="text" placeholder="${lang === "ru" ? "Язык оригинала" : "Original language"}" name="TRANSLATE_FROM">
      </div>
      <div class="order-form__field">
        <input class="main-input" type="text" placeholder="${lang === "ru" ? "Язык перевода" : "Target language"}" name="TRANSLATE_TO">
      </div>
      <div class="order-form__field order-form__field--file">
        <span class="order-form__field-desc">${lang === "ru" ? "Текст для перевода" : "Text to be translated"}</span>

        <div class="main-input-file-container">
          <input class="main-input--file main-input" type="file" name="FILE_1" id="user_translate_files">
          <label class="add-file-label" for="user_translate_files" tabindex="0">
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.63178 6.31821C1.75327 5.4397 1.75327 4.01044 2.63178 3.13194C3.05748 2.70624 3.62332 2.47199 4.2251 2.47199C4.82689 2.47199 5.39273 2.70625 5.8183 3.13194L8.41987 5.73325C8.60622 5.91923 8.85375 6.02188 9.1171 6.02188C9.38045 6.02188 9.62797 5.91923 9.81433 5.73325C10.0007 5.54703 10.1033 5.29937 10.1033 5.03603C10.1033 4.77266 10.0007 4.52503 9.81433 4.33855L7.21276 1.73758C6.41486 0.939554 5.35383 0.5 4.2251 0.5C3.09612 0.5 2.03522 0.939554 1.23771 1.73758C0.439554 2.5351 0 3.59612 0 4.72498C0 5.85371 0.439554 6.91473 1.23758 7.71237L3.83877 10.3137C4.02512 10.5003 4.27275 10.6028 4.536 10.6028C4.79924 10.6028 5.04662 10.5002 5.2331 10.3138C5.41945 10.1276 5.52209 9.88019 5.52209 9.61659C5.52209 9.35299 5.41945 9.10559 5.23334 8.91949L2.63178 6.31821ZM5.11547 4.62957C4.8521 4.62957 4.60446 4.73221 4.41824 4.91832C4.23201 5.10454 4.12949 5.3522 4.12949 5.61554C4.12949 5.87891 4.23214 6.12654 4.41824 6.31302L10.1869 12.0814C10.3732 12.2676 10.6208 12.3701 10.8842 12.3701C11.1475 12.3701 11.3952 12.2675 11.5814 12.0814C11.9661 11.6967 11.9661 11.0712 11.5814 10.6866L5.81269 4.91819C5.62634 4.73209 5.37881 4.62969 5.11547 4.62969V4.62957ZM14.7624 9.28725L12.1608 6.68581C11.9745 6.49958 11.7268 6.39718 11.4636 6.39718C11.2004 6.39718 10.953 6.49983 10.7665 6.68581C10.5801 6.87178 10.4777 7.11943 10.4777 7.38303C10.4777 7.6464 10.5801 7.89404 10.7665 8.08026L13.3681 10.6815C14.2462 11.56 14.2462 12.9892 13.3681 13.8677C12.9422 14.2934 12.3761 14.5281 11.7747 14.5281C11.173 14.5281 10.6072 14.2938 10.1813 13.8678L7.5801 11.2662C7.39388 11.0802 7.14647 10.9779 6.88326 10.9779C6.62014 10.9779 6.37263 11.0802 6.18616 11.2664C5.99981 11.4526 5.89716 11.7003 5.89716 11.9639C5.89716 12.2271 5.99981 12.4749 6.18616 12.6614L8.78735 15.2625C9.58449 16.0604 10.6455 16.5 11.7746 16.5C12.9037 16.5 13.9649 16.0604 14.7624 15.2625C16.4096 13.6149 16.4096 10.9345 14.7624 9.2875V9.28725Z" fill="#704437"/>
            </svg>
            <span>${lang === "ru" ? "Прикрепить" : "Attach file "}</span>
          </label>
          <button type="button" class="main-input-file-remove">${lang === "ru" ? "Удалить" : "Remove"}</button>
        </div>

      </div>

      <div class="order-form__field">
        <div class="main-checkbox">
          <input type="checkbox" checked="" name="TRANSLATE_NOTAR_REQUIRED" id="translate_notarized_translation_required">
          <label class="checkbox-label" for="translate_notarized_translation_required" tabindex="0">
          ${lang === "ru" ? "Требуется нотариальное заверение перевода" : "Notarized translation required"}
          </label>
        </div>

        <div class="main-checkbox">
          <input type="checkbox" checked="" name="TRANSLATE_STAMP_REQUIRED" id="office_stamp_required">
          <label class="checkbox-label" for="office_stamp_required" tabindex="0">
            ${lang === "ru" ? "Требуется заверение печатью бюро" : "Office stamp required"}
          </label>
        </div>
      </div>

    </fieldset>`
  }

  if(type === FormType.RECLAMATION) {
    return `<fieldset data-field="reclamation">
      <div class="order-form__field">
        <input class="main-input" type="text" placeholder="${lang === "ru" ? "Какой документ необходимо получить" : "What document do you need to get"}" name="RECLAMATION_TYPE">
      </div>
      <div class="order-form__field">
        <input class="main-input" type="text" placeholder="${lang === "ru" ? "Место выдачи" : "Place of issue of the document"}" name="RECLAMATION_PLACE">
      </div>
      <div class="order-form__field order-form__field--file">
        <span class="order-form__field-desc">${lang === "ru" ? "Текст для перевода" : "Text to be translated"}</span>

        <div class="main-input-file-container">
          <input class="main-input--file main-input" type="file" name="FILE_1" id="user_reclamation_files">
          <label class="addfile-label" for="user_reclamation_files" tabindex="0">
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.63178 6.31821C1.75327 5.4397 1.75327 4.01044 2.63178 3.13194C3.05748 2.70624 3.62332 2.47199 4.2251 2.47199C4.82689 2.47199 5.39273 2.70625 5.8183 3.13194L8.41987 5.73325C8.60622 5.91923 8.85375 6.02188 9.1171 6.02188C9.38045 6.02188 9.62797 5.91923 9.81433 5.73325C10.0007 5.54703 10.1033 5.29937 10.1033 5.03603C10.1033 4.77266 10.0007 4.52503 9.81433 4.33855L7.21276 1.73758C6.41486 0.939554 5.35383 0.5 4.2251 0.5C3.09612 0.5 2.03522 0.939554 1.23771 1.73758C0.439554 2.5351 0 3.59612 0 4.72498C0 5.85371 0.439554 6.91473 1.23758 7.71237L3.83877 10.3137C4.02512 10.5003 4.27275 10.6028 4.536 10.6028C4.79924 10.6028 5.04662 10.5002 5.2331 10.3138C5.41945 10.1276 5.52209 9.88019 5.52209 9.61659C5.52209 9.35299 5.41945 9.10559 5.23334 8.91949L2.63178 6.31821ZM5.11547 4.62957C4.8521 4.62957 4.60446 4.73221 4.41824 4.91832C4.23201 5.10454 4.12949 5.3522 4.12949 5.61554C4.12949 5.87891 4.23214 6.12654 4.41824 6.31302L10.1869 12.0814C10.3732 12.2676 10.6208 12.3701 10.8842 12.3701C11.1475 12.3701 11.3952 12.2675 11.5814 12.0814C11.9661 11.6967 11.9661 11.0712 11.5814 10.6866L5.81269 4.91819C5.62634 4.73209 5.37881 4.62969 5.11547 4.62969V4.62957ZM14.7624 9.28725L12.1608 6.68581C11.9745 6.49958 11.7268 6.39718 11.4636 6.39718C11.2004 6.39718 10.953 6.49983 10.7665 6.68581C10.5801 6.87178 10.4777 7.11943 10.4777 7.38303C10.4777 7.6464 10.5801 7.89404 10.7665 8.08026L13.3681 10.6815C14.2462 11.56 14.2462 12.9892 13.3681 13.8677C12.9422 14.2934 12.3761 14.5281 11.7747 14.5281C11.173 14.5281 10.6072 14.2938 10.1813 13.8678L7.5801 11.2662C7.39388 11.0802 7.14647 10.9779 6.88326 10.9779C6.62014 10.9779 6.37263 11.0802 6.18616 11.2664C5.99981 11.4526 5.89716 11.7003 5.89716 11.9639C5.89716 12.2271 5.99981 12.4749 6.18616 12.6614L8.78735 15.2625C9.58449 16.0604 10.6455 16.5 11.7746 16.5C12.9037 16.5 13.9649 16.0604 14.7624 15.2625C16.4096 13.6149 16.4096 10.9345 14.7624 9.2875V9.28725Z" fill="#704437"/>
            </svg>
            <span>${lang === "ru" ? "Прикрепить" : "Attach file"}</span>
          </label>
          <button type="button" class="main-input-file-remove">${lang === "ru" ? "Удалить" : "Remove"}</button>
        </div>
      </div>
      <div class="order-form__field">
        <div class="main-checkbox">
          <input type="checkbox" checked="" name="RECLAMATION_TRANSLATE_REQUIRED" id="reclamation_notarized_translation_required">
          <label class="checkbox-label" for="reclamation_notarized_translation_required" tabindex="0">
            ${lang === "ru" ? "Требуется нотариальное заверение перевода" : "Notarized translation required"}
          </label>
        </div>
      </div>
    </fieldset>`
  }

  if(type === FormType.APOSTIL) {
    return `<fieldset data-field="apostil">
      <div class="order-form__field">
        <input class="main-input" type="text" placeholder="${lang === "ru" ? "Страна, для которой легализуются документы" : "Country for which documents are legalized"}" name="APOSTILLE_COUNTRY_TO">
      </div>
      <div class="order-form__field">
        <input class="main-input" type="text" placeholder="${lang === "ru" ? "Вид документа" : "Document type "}" name="APOSTILLE_TYPE">
      </div>
      <div class="order-form__field order-form__field--file">
        <span class="order-form__field-desc">${lang === "ru" ? "Копии документа(ов)" : "Copies of document(s)"}</span>
        <div class="main-input-file-container">
          <input class="main-input--file main-input" type="file" name="FILE_1" id="user_apostil_files">
          <label class="addfile-label" for="user_apostil_files" tabindex="0">
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.63178 6.31821C1.75327 5.4397 1.75327 4.01044 2.63178 3.13194C3.05748 2.70624 3.62332 2.47199 4.2251 2.47199C4.82689 2.47199 5.39273 2.70625 5.8183 3.13194L8.41987 5.73325C8.60622 5.91923 8.85375 6.02188 9.1171 6.02188C9.38045 6.02188 9.62797 5.91923 9.81433 5.73325C10.0007 5.54703 10.1033 5.29937 10.1033 5.03603C10.1033 4.77266 10.0007 4.52503 9.81433 4.33855L7.21276 1.73758C6.41486 0.939554 5.35383 0.5 4.2251 0.5C3.09612 0.5 2.03522 0.939554 1.23771 1.73758C0.439554 2.5351 0 3.59612 0 4.72498C0 5.85371 0.439554 6.91473 1.23758 7.71237L3.83877 10.3137C4.02512 10.5003 4.27275 10.6028 4.536 10.6028C4.79924 10.6028 5.04662 10.5002 5.2331 10.3138C5.41945 10.1276 5.52209 9.88019 5.52209 9.61659C5.52209 9.35299 5.41945 9.10559 5.23334 8.91949L2.63178 6.31821ZM5.11547 4.62957C4.8521 4.62957 4.60446 4.73221 4.41824 4.91832C4.23201 5.10454 4.12949 5.3522 4.12949 5.61554C4.12949 5.87891 4.23214 6.12654 4.41824 6.31302L10.1869 12.0814C10.3732 12.2676 10.6208 12.3701 10.8842 12.3701C11.1475 12.3701 11.3952 12.2675 11.5814 12.0814C11.9661 11.6967 11.9661 11.0712 11.5814 10.6866L5.81269 4.91819C5.62634 4.73209 5.37881 4.62969 5.11547 4.62969V4.62957ZM14.7624 9.28725L12.1608 6.68581C11.9745 6.49958 11.7268 6.39718 11.4636 6.39718C11.2004 6.39718 10.953 6.49983 10.7665 6.68581C10.5801 6.87178 10.4777 7.11943 10.4777 7.38303C10.4777 7.6464 10.5801 7.89404 10.7665 8.08026L13.3681 10.6815C14.2462 11.56 14.2462 12.9892 13.3681 13.8677C12.9422 14.2934 12.3761 14.5281 11.7747 14.5281C11.173 14.5281 10.6072 14.2938 10.1813 13.8678L7.5801 11.2662C7.39388 11.0802 7.14647 10.9779 6.88326 10.9779C6.62014 10.9779 6.37263 11.0802 6.18616 11.2664C5.99981 11.4526 5.89716 11.7003 5.89716 11.9639C5.89716 12.2271 5.99981 12.4749 6.18616 12.6614L8.78735 15.2625C9.58449 16.0604 10.6455 16.5 11.7746 16.5C12.9037 16.5 13.9649 16.0604 14.7624 15.2625C16.4096 13.6149 16.4096 10.9345 14.7624 9.2875V9.28725Z" fill="#704437"/>
            </svg>
            <span>${lang === "ru" ? "Прикрепить" : "Attach file"}</span>
          </label>
          <button type="button" class="main-input-file-remove">${lang === "ru" ? "Удалить" : "Remove"}</button>
        </div>
      </div>
      <div class="order-form__field">
        <div class="main-checkbox">
          <input type="checkbox" name="APOSTILLE_IS_ORIGINAL" checked="" id="apostil_is_original">
          <label class="checkbox-label" for="apostil_is_original" tabindex="0">${lang === "ru" ? "Легализуются оригиналы ?" : "Are originals legalized ?"}</label>
        </div>
        <div class="main-checkbox">
          <input type="checkbox" data-addict="apostil_translation_lang" name="APOSTILLE_TRANSLATE_REQUIRED" checked="" id="apostil_translation_required">
          <label class="checkbox-label" for="apostil_translation_required" tabindex="0">${lang === "ru" ? "Требуется ли перевод ?" : "Is a translation required ?"}</label>
        </div>
        <input class="main-input" type="text" placeholder="${lang === "ru" ? "Язык перевода" : "Target language"}" name="APOSTILLE_TRANSLATE_LANG">
      </div>
    </fieldset>`
  }

  if(type === FormType.LEGALIZATION) {
    return `<fieldset data-field="legalization">
      <div class="order-form__field">
        <input class="main-input" type="text" placeholder="${lang === "ru" ? "Страна, для которой легализуются документы" : "Country for which documents are legalized"}" name="LEGALIZATION_COUNTRY_TO">
      </div>
      <div class="order-form__field">
        <input class="main-input" type="text" placeholder="${lang === "ru" ? "Вид документа" : "Document type "}" name="LEGALIZATION_TYPE">
      </div>
      <div class="order-form__field order-form__field--file">
        <span class="order-form__field-desc">${lang === "ru" ? "Копии документа(ов)" : "Copies of document(s)"}</span>

        <div class="main-input-file-container">
          <input class="main-input--file main-input" type="file" name="FILE_1" id="user_legalization_files">
          <label class="addfile-label" for="user_legalization_files" tabindex="0">
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.63178 6.31821C1.75327 5.4397 1.75327 4.01044 2.63178 3.13194C3.05748 2.70624 3.62332 2.47199 4.2251 2.47199C4.82689 2.47199 5.39273 2.70625 5.8183 3.13194L8.41987 5.73325C8.60622 5.91923 8.85375 6.02188 9.1171 6.02188C9.38045 6.02188 9.62797 5.91923 9.81433 5.73325C10.0007 5.54703 10.1033 5.29937 10.1033 5.03603C10.1033 4.77266 10.0007 4.52503 9.81433 4.33855L7.21276 1.73758C6.41486 0.939554 5.35383 0.5 4.2251 0.5C3.09612 0.5 2.03522 0.939554 1.23771 1.73758C0.439554 2.5351 0 3.59612 0 4.72498C0 5.85371 0.439554 6.91473 1.23758 7.71237L3.83877 10.3137C4.02512 10.5003 4.27275 10.6028 4.536 10.6028C4.79924 10.6028 5.04662 10.5002 5.2331 10.3138C5.41945 10.1276 5.52209 9.88019 5.52209 9.61659C5.52209 9.35299 5.41945 9.10559 5.23334 8.91949L2.63178 6.31821ZM5.11547 4.62957C4.8521 4.62957 4.60446 4.73221 4.41824 4.91832C4.23201 5.10454 4.12949 5.3522 4.12949 5.61554C4.12949 5.87891 4.23214 6.12654 4.41824 6.31302L10.1869 12.0814C10.3732 12.2676 10.6208 12.3701 10.8842 12.3701C11.1475 12.3701 11.3952 12.2675 11.5814 12.0814C11.9661 11.6967 11.9661 11.0712 11.5814 10.6866L5.81269 4.91819C5.62634 4.73209 5.37881 4.62969 5.11547 4.62969V4.62957ZM14.7624 9.28725L12.1608 6.68581C11.9745 6.49958 11.7268 6.39718 11.4636 6.39718C11.2004 6.39718 10.953 6.49983 10.7665 6.68581C10.5801 6.87178 10.4777 7.11943 10.4777 7.38303C10.4777 7.6464 10.5801 7.89404 10.7665 8.08026L13.3681 10.6815C14.2462 11.56 14.2462 12.9892 13.3681 13.8677C12.9422 14.2934 12.3761 14.5281 11.7747 14.5281C11.173 14.5281 10.6072 14.2938 10.1813 13.8678L7.5801 11.2662C7.39388 11.0802 7.14647 10.9779 6.88326 10.9779C6.62014 10.9779 6.37263 11.0802 6.18616 11.2664C5.99981 11.4526 5.89716 11.7003 5.89716 11.9639C5.89716 12.2271 5.99981 12.4749 6.18616 12.6614L8.78735 15.2625C9.58449 16.0604 10.6455 16.5 11.7746 16.5C12.9037 16.5 13.9649 16.0604 14.7624 15.2625C16.4096 13.6149 16.4096 10.9345 14.7624 9.2875V9.28725Z" fill="#704437"/>
            </svg>
            <span>${lang === "ru" ? "Прикрепить" : "Attach file"}</span>
          </label>
          <button type="button" class="main-input-file-remove">${lang === "ru" ? "Удалить" : "Remove"}</button>
        </div>
      </div>
      <div class="order-form__field">
        <div class="main-checkbox">
          <input type="checkbox" name="LEGALIZATION_IS_ORIGINAL" checked="" id="legalization_is_original">
          <label class="checkbox-label" for="legalization_is_original" tabindex="0">${lang === "ru" ? "Легализуются оригиналы ?" : "Are originals legalized ?"}</label>
        </div>

        <div class="main-checkbox">
          <input type="checkbox" name="LEGALIZATION_TRANSLATE_REQUIRED" data-addict="legalization_translation_lang" checked="" id="legalization_translation_required">
          <label class="checkbox-label" for="legalization_translation_required" tabindex="0">${lang === "ru" ? "Требуется ли перевод ?" : "Is a translation required ?"}</label>
        </div>

        <input class="main-input" type="text" placeholder="${lang === "ru" ? "Язык перевода" : "Target language"}" name="LEGALIZATION_TRANSLATE_LANG">
      </div>
    </fieldset>`
  }
}

export const OrderFormAddFileView = (type, count, lang) => {
  return `<div class="main-input-file-container">
    <input class="main-input--file main-input" type="file" name="FILE_${count}" id="user_${type}_files_${count}">
    <label class="add-file-label" for="user_${type}_files_${count}" tabindex="0">
      <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.63178 6.31821C1.75327 5.4397 1.75327 4.01044 2.63178 3.13194C3.05748 2.70624 3.62332 2.47199 4.2251 2.47199C4.82689 2.47199 5.39273 2.70625 5.8183 3.13194L8.41987 5.73325C8.60622 5.91923 8.85375 6.02188 9.1171 6.02188C9.38045 6.02188 9.62797 5.91923 9.81433 5.73325C10.0007 5.54703 10.1033 5.29937 10.1033 5.03603C10.1033 4.77266 10.0007 4.52503 9.81433 4.33855L7.21276 1.73758C6.41486 0.939554 5.35383 0.5 4.2251 0.5C3.09612 0.5 2.03522 0.939554 1.23771 1.73758C0.439554 2.5351 0 3.59612 0 4.72498C0 5.85371 0.439554 6.91473 1.23758 7.71237L3.83877 10.3137C4.02512 10.5003 4.27275 10.6028 4.536 10.6028C4.79924 10.6028 5.04662 10.5002 5.2331 10.3138C5.41945 10.1276 5.52209 9.88019 5.52209 9.61659C5.52209 9.35299 5.41945 9.10559 5.23334 8.91949L2.63178 6.31821ZM5.11547 4.62957C4.8521 4.62957 4.60446 4.73221 4.41824 4.91832C4.23201 5.10454 4.12949 5.3522 4.12949 5.61554C4.12949 5.87891 4.23214 6.12654 4.41824 6.31302L10.1869 12.0814C10.3732 12.2676 10.6208 12.3701 10.8842 12.3701C11.1475 12.3701 11.3952 12.2675 11.5814 12.0814C11.9661 11.6967 11.9661 11.0712 11.5814 10.6866L5.81269 4.91819C5.62634 4.73209 5.37881 4.62969 5.11547 4.62969V4.62957ZM14.7624 9.28725L12.1608 6.68581C11.9745 6.49958 11.7268 6.39718 11.4636 6.39718C11.2004 6.39718 10.953 6.49983 10.7665 6.68581C10.5801 6.87178 10.4777 7.11943 10.4777 7.38303C10.4777 7.6464 10.5801 7.89404 10.7665 8.08026L13.3681 10.6815C14.2462 11.56 14.2462 12.9892 13.3681 13.8677C12.9422 14.2934 12.3761 14.5281 11.7747 14.5281C11.173 14.5281 10.6072 14.2938 10.1813 13.8678L7.5801 11.2662C7.39388 11.0802 7.14647 10.9779 6.88326 10.9779C6.62014 10.9779 6.37263 11.0802 6.18616 11.2664C5.99981 11.4526 5.89716 11.7003 5.89716 11.9639C5.89716 12.2271 5.99981 12.4749 6.18616 12.6614L8.78735 15.2625C9.58449 16.0604 10.6455 16.5 11.7746 16.5C12.9037 16.5 13.9649 16.0604 14.7624 15.2625C16.4096 13.6149 16.4096 10.9345 14.7624 9.2875V9.28725Z" fill="#704437"/>
      </svg>
      <span>${lang === "ru" ? "Прикрепить" : "Attach file"}</span>
    </label>

    <button type="button" class="main-input-file-remove">${lang === "ru" ? "Удалить" : "Remove"}</button>
  </div>`
}
