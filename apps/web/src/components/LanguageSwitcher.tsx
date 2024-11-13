import { useRouter } from 'next/router';

const LanguageSwitcher: React.FC = () => {
  const router = useRouter();
  const { locale, locales, pathname, query, asPath } = router;

  const switchLanguage = (lang: string) => {
    router.push({ pathname, query }, asPath, { locale: lang });
  };

  return (
    <div>
      {locales?.map((lang) => (
        <button key={lang} onClick={() => switchLanguage(lang)} disabled={lang === locale}>
          {lang.toUpperCase()}
        </button>
      ))}   
    </div>
  );
};

export default LanguageSwitcher;
