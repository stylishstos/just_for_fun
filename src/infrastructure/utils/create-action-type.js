export default function(type) {
  return {
    pending: type,
    resolve: `${type}_RESOLVE`,
    reject: `${type}_REJECT`
  };
}
