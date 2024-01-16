import { createUrl } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';

const useTags = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const newParams = new URLSearchParams(searchParams.toString());

  function pushUrlWithParams(params: URLSearchParams) {
    router.push(createUrl('/', params));
  }

  function handleSetTagsToParams(tag: string) {
    let output: string[] =
      searchParams
        .get('tag')
        ?.toString()
        .split(',')
        .filter((el) => el !== '') || [];

    if (output.includes(tag)) {
      output = output.filter((el) => el !== tag);
    } else {
      output = [tag, ...output];
    }

    newParams.set('tag', output.join(','));

    console.log('output:', output);
    pushUrlWithParams(newParams);
  }

  function removeTagFromParams(tag: string) {
    let output: string[] = searchParams.get('tag')?.toString().split(',') || [];

    if (output.includes(tag)) {
      output = output.filter((el) => el !== tag);

      newParams.set('tag', output.length > 0 ? output.join(',') : '');
    }

    pushUrlWithParams(newParams);
  }

  function clearAllTags() {
    const newParams = new URLSearchParams(searchParams.toString());

    newParams.delete('tag');

    pushUrlWithParams(newParams);
  }

  return {
    handleSetTagsToParams,
    removeTagFromParams,
    clearAllTags,
  };
};

export default useTags;
